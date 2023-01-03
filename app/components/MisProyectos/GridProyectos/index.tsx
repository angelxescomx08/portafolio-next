'use client'

import { FC, lazy } from 'react'

import estilos from './estilos.module.css'

const Proyecto = lazy(() => import('../Proyecto').then(m => ({ default: m.Proyecto })))

const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
}

interface Props {
    proyectos: {
        id: number;
        nombre: string;
        imagenDesktop: string;
        imagenMobile: string;
        tecnologias: number[];
    }[]
}

export const GridProyectos: FC<Props> = ({ proyectos }) => {
    return (
        <div className={estilos.grid}>
            {proyectos.map((proyecto,i) => (
                <div className={estilos.contenedor} key={proyecto.id}>
                    <Proyecto {...proyecto} container={{
                        hidden: { opacity: 0, scale: 0 },
                        show: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                delay: i*.2,
                                staggerChildren: 1,
                            }
                        }
                    }} item={item} />
                </div>
            ))}
        </div>
    )
}
