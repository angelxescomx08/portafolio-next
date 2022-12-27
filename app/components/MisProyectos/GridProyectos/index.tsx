'use client'

import { FC, lazy } from 'react'
import { Acf } from '../../../interfaces'

import estilos from './estilos.module.css'

const Proyecto = lazy(() => import('../Proyecto').then(m => ({ default: m.Proyecto })))

const container = {
    hidden: { opacity: 0, scale: 0 },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: .6,
        }
    }
}

const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
}

interface Props {
    proyectos: {
        id: number;
        acf: Acf;
        tecnologias: string[];
    }[]
}

export const GridProyectos: FC<Props> = ({ proyectos }) => {
    return (
        <div className={estilos.grid}>
            {proyectos.map(proyecto => (
                <div className={estilos.contenedor} key={proyecto.id}>
                    <Proyecto {...proyecto} container={container} item={item} />
                </div>
            ))}
        </div>
    )
}
