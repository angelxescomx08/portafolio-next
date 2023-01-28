'use client'

import { AnimatePresence } from 'framer-motion'
import { FC, lazy, useContext } from 'react'

import { ModalProyectoContext } from '../../../context';
import { PreviewProyecto } from '../PreviewProyecto';
import { ProyectoMini, Tecnologia } from '../../../interfaces';

const Proyecto = lazy(() => import('../Proyecto').then(m => ({ default: m.Proyecto })))

const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
}

interface Props {
    proyectos: ProyectoMini[];
    tecnologias: Tecnologia[];
}

export const GridProyectos: FC<Props> = ({ proyectos, tecnologias }) => {
    const { estaAbierto, layoutId } = useContext(ModalProyectoContext)
    return (
        <>

            <div className={'flex flex-wrap justify-evenly'}>
                {proyectos.map((proyecto, i) => (
                    <div style={{minWidth: 375}} className={'w-1/3 p-4'} key={proyecto.id}>
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
                {estaAbierto && <PreviewProyecto layoutId={layoutId} tecnologias={tecnologias} />}
            </AnimatePresence>
        </>

    )
}
