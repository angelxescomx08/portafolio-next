import { ACFPaginaPrincipal } from '../../interfaces'

const obtenerDatos = async (id: number): Promise<ACFPaginaPrincipal> => {
    const url = `${process.env.API_URL_BASE}/pagina/${id}`
    const res = await fetch(url, { 
        next: { revalidate: 10 } 
    });
    const datos = await res.json()
    console.log(datos)
    return datos.acf
    
}

export default async function AcercaDeMi() {
    const { acerca_de_mi } = await obtenerDatos(37);
    const { titulo_1, titulo_2, parrafo } = acerca_de_mi;
    return (
        <main>
            <h2>{titulo_1}</h2>
            <h1>{titulo_2}</h1>
            <p>{parrafo}</p>
        </main>
    )
}
