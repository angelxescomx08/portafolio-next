'use client'

import { FC, lazy, useContext } from 'react'
import { Grid } from '@mui/material';
import { AnimatePresence } from 'framer-motion'

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
            <Grid container spacing={1}>
                {proyectos.map((proyecto) => (

                    <Proyecto key={proyecto.id} {...proyecto} container={{
                        hidden: { opacity: 0, scale: 0 },
                        show: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                staggerChildren: 1,
                            }
                        }
                    }} item={item} />

                ))}
            </Grid>

            <AnimatePresence>
                {estaAbierto && <PreviewProyecto layoutId={layoutId} tecnologias={tecnologias} />}
            </AnimatePresence>
        </>

    )
}
