import dynamic from 'next/dynamic'
import { Proyecto, Tecnologia } from '../../interfaces'

const GridProyectos = dynamic(() => import('./GridProyectos').then(m => ({ default: m.GridProyectos })))

const obtenerTecnologias = async (page: number = 1, per_page: number = 100) => {
    const url = `${process.env.API_URL_BASE}/tecnologias?page=${page}&per_page=${per_page}`
    const data = await fetch(url, {
        next: { revalidate: 60 }
    })
    const tecnologias = await data.json() as Tecnologia[];

    return tecnologias;
}

const obtenerProyectos = async (page: number = 1, per_page: number = 100) => {
    const url = `${process.env.API_URL_BASE}/proyectos?page=${page}&per_page=${per_page}`

    const response = await fetch(url, {
        next: { revalidate: 60 }
    })
    const data = await response.json() as Proyecto[]

    return data.map(proyecto => ({
        id: proyecto.id,
        nombre: proyecto.acf.nombre,
        imagenDesktop: proyecto.acf.imagenes.imagen_1.url,
        imagenMobile: proyecto.acf.imagenes.imagen_1.sizes.medium_large,
        tecnologias: proyecto.tecnologias,
    }))
}

export default async function MisProyectos() {

    const [proyectos, tecnologias] = await Promise.all([
        obtenerProyectos(),
        obtenerTecnologias()
    ])

    return (
        <div className={''}>
            <h2 className={'text-center mt-8 2xl:text-6xl xl:text-4xl lg:text-3xl md:text-3xl text-2xl'}>
                Proyectos
            </h2>
            <GridProyectos proyectos={proyectos} tecnologias={tecnologias} />
        </div>

    )
}
