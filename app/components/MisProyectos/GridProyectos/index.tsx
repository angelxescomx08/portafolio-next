'use client'

import { AnimatePresence } from 'framer-motion'
import { FC, lazy, useContext } from 'react'

import { ModalProyectoContext } from '../../../context';
import { PreviewProyecto } from '../PreviewProyecto';
import { ProyectoMini } from '../../../interfaces';
import estilos from './estilos.module.css'

const Proyecto = lazy(() => import('../Proyecto').then(m => ({ default: m.Proyecto })))

const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
}

interface Props {
    proyectos: ProyectoMini[]
}

export const GridProyectos: FC<Props> = ({ proyectos }) => {
    const { estaAbierto, layoutId } = useContext(ModalProyectoContext)
    return (
        <>

            <div className={`${estilos.grid} `}>
                {proyectos.map((proyecto, i) => (
                    <div className={estilos.contenedor} key={proyecto.id}>
                        <Proyecto {...proyecto} container={{
                            hidden: { opacity: 0, scale: 0 },
                            show: {
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    delay: i * .1,
                                    staggerChildren: 1,
                                }
                            }
                        }} item={item} />
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {estaAbierto && <PreviewProyecto layoutId={layoutId} />}
            </AnimatePresence>
        </>

    )
}
