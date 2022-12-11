import parse from 'html-react-parser'

import { ACFPaginaPrincipal } from '../../interfaces'

import styles from './styles.module.css'

const obtenerDatos = async (id: number): Promise<ACFPaginaPrincipal> => {
    const url = `${process.env.API_URL_BASE}/pagina/${id}`
    const res = await fetch(url, { 
        next: { revalidate: 10 } 
    });
    const datos = await res.json()
    return datos.acf
}

export default async function AcercaDeMi() {
    const { acerca_de_mi } = await obtenerDatos(37);
    const { titulo_1, titulo_2, parrafo } = acerca_de_mi;
    return (
        <main className={styles.main}>
            <h2 className={styles.h2}>{parse(titulo_1)}</h2>
            <h1 className={styles.h1}>{parse(titulo_2)}</h1>
            <p className={styles.p}>{parse(parrafo)}</p>
        </main>
    )
}
