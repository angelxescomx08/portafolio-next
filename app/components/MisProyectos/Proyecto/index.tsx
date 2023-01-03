'use client'

import { FC, useRef } from 'react';
import { useInView } from "framer-motion";
import { m, LazyMotion, domAnimation } from 'framer-motion'
import { useMediaQuery } from '@mui/material';

import estilos from './estilos.module.css'

interface Props {
    id: number;
    nombre: string;
    imagenDesktop: string;
    imagenMobile: string;
    tecnologias: number[];
    container: any;
    item: any;
}

const hover = {
    scale: 1.05,
    rotate: 1,
    boxShadow: '10px 10px 1rem #000'
}

export const Proyecto: FC<Props> = ({ nombre, container, imagenDesktop, imagenMobile }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const esMobile = useMediaQuery('(max-width:1200px)');

    return (
        <article className={estilos['contenedor-proyecto']} ref={ref}>
            <LazyMotion features={domAnimation}>
                {isInView && <m.div
                    className={estilos['contenedor-imagenes']}
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : ''}
                >
                    {esMobile ? <m.img
                        className={`${estilos['img']}`}
                        src={imagenMobile}
                        whileHover={hover}
                        alt={nombre}
                    /> : <m.img
                        className={`${estilos['img']}`}
                        src={imagenDesktop}
                        whileHover={hover}
                        alt={nombre}
                    />}

                </m.div>}
            </LazyMotion>
            <h2
                className={estilos.h2}
            >
                {nombre}
            </h2>
        </article>
    )
}
