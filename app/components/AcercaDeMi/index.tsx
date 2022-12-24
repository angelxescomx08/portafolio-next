import { ACFPaginaPrincipal } from '../../interfaces'
import { Datos } from './datos'

const obtenerDatos = async (id: number): Promise<ACFPaginaPrincipal> => {
    const url = `${process.env.API_URL_BASE}/pagina/${id}`
    const res = await fetch(url, { 
        next: { revalidate: 60 } 
    });
    const datos = await res.json()
    return datos.acf
}

export default async function AcercaDeMi() {
    const { acerca_de_mi } = await obtenerDatos(37);
    const { titulo_1, titulo_2, parrafo } = acerca_de_mi;
    return (
        <Datos
            titulo_1={titulo_1}
            titulo_2={titulo_2}
            parrafo={parrafo}
        />
    )
}
