'use client'

import { FC, lazy, Suspense } from 'react'
import { LazyMotion, domAnimation, m } from "framer-motion"
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
        <LazyMotion features={domAnimation}>
            <m.div className={estilos.grid}>
                {proyectos.map(proyecto => (
                    <m.div className={estilos.contenedor} key={proyecto.id}>
                        <Suspense fallback={<p>Cargando...</p>}>
                            <Proyecto {...proyecto} container={container} item={item} />
                        </Suspense>
                    </m.div>
                ))}
            </m.div>
        </LazyMotion>
    )
}
