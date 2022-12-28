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

export const Proyecto: FC<Props> = ({ nombre, container, item, imagenDesktop, imagenMobile }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const esMobile = useMediaQuery('(max-width:1200px)');

    return (
        <article className={estilos['contenedor-proyecto']} ref={ref}>
            <LazyMotion features={domAnimation}>
                {isInView&&<m.div
                    className={estilos['contenedor-imagenes']}  
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : ''}
                >
                    {esMobile ? <m.img
                        className={`${estilos['img']}`}
                        src={imagenMobile}
                        variants={item}
                        alt={nombre}
                    /> : <m.img
                        className={`${estilos['img']}`}
                        src={imagenDesktop}
                        variants={item}
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
