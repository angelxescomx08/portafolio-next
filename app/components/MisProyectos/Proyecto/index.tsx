'use client'

import { FC, useContext, useRef } from 'react';
import Image from 'next/image'
import { m, LazyMotion, domAnimation, useInView, motion } from 'framer-motion';
import { ModalProyectoContext } from '../../../context/ModalProyecto/ModalProyectoContext';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

interface Props {
    id: number;
    nombre: string;
    imagenDesktop: string;
    imagenMobile: string;
    tecnologias: number[];
    container: any;
    item: any;
}

export const Proyecto: FC<Props> = ({ id, nombre, container, imagenDesktop, imagenMobile, tecnologias }) => {

    const { setEstaAbierto, setLayoutId, setProyecto } = useContext(ModalProyectoContext)
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const esMobile = useMediaQuery('(max-width:640px)');

    const onClick = () => {
        setLayoutId(`${id}`)
        setProyecto({
            id,
            imagenDesktop,
            imagenMobile,
            nombre,
            tecnologias
        })
        setEstaAbierto(true)
    }

    return (
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
            <motion.article
                layoutId={`${id}`}
                className={'relative z-10 w-full p-3 rounded-2xl cursor-pointer'}
                ref={ref}
                onClick={onClick}
            >
                <LazyMotion features={domAnimation}>
                    {isInView && <m.div
                        className={'relative w-full aspect-video'}
                        variants={container}
                        initial="hidden"
                        animate={isInView ? "show" : ''}
                    >
                        <Image
                            className={'w-full aspect-video object-cover rounded-lg'}
                            src={ esMobile ? imagenMobile : imagenDesktop  }
                            fill
                            sizes={'(max-width) 100%'}
                            alt={nombre}
                        />

                    </m.div>}
                </LazyMotion>
                <h2
                    className={'text-xl m-0'}
                >
                    {nombre}
                </h2>
            </motion.article>
        </Grid>
    )
}
