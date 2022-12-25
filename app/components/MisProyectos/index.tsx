import { lazy } from 'react'
import { Proyectos } from "../../interfaces"

import estilos from './estilos.module.css'

const GridProyectos = lazy(() => import('./GridProyectos').then(m => ({ default: m.GridProyectos })))

const obtenerProyectos = async (page: number = 1, per_page: number = 100) => {
    const url = `${process.env.API_URL_BASE}/proyectos?page=${page}&per_page=${per_page}`
    const response = await fetch(url, {
        next: { revalidate: 60 }
    })
    const data = await response.json() as Proyectos[]
    return data.map(proyecto => ({
        id: proyecto.id,
        acf: proyecto.acf,
        tecnologias: proyecto.tecnologias
    }))
}

export default async function MisProyectos() {
    const proyectos = await obtenerProyectos()
    return (
        <>
            <h2  className={estilos.h2}>Proyectos</h2>
            <GridProyectos proyectos={proyectos} />
        </>

    )
}
