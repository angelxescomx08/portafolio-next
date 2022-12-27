'use client'

import { FC, useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useInView } from "framer-motion";
import { m, LazyMotion, domAnimation } from 'framer-motion'

import { Acf } from '../../../interfaces'

import estilos from './estilos.module.css'

interface Props {
    id: number;
    acf: Acf;
    tecnologias: number[];
    container: any;
    item: any;
}

export const Proyecto: FC<Props> = ({ acf, container, item }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const esCelular = useMediaQuery('(max-width:1200px)');

    return (
        <article className={estilos['contenedor-proyecto']}>
            <LazyMotion features={domAnimation}>
                <m.div
                    className={estilos['contenedor-imagenes']}
                    ref={ref}
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : ''}
                >

                    <m.img
                        className={`${estilos['img']} ${estilos.img2}`}
                        src={esCelular ? acf.imagenes.imagen_2.sizes.medium : acf.imagenes.imagen_2.url}
                        variants={item}
                        alt={acf.nombre}
                    />

                    <m.img
                        className={`${estilos['img']} ${estilos.img1}`}
                        src={esCelular ? acf.imagenes.imagen_1.sizes.medium : acf.imagenes.imagen_1.url}
                        variants={item}
                        alt={acf.nombre}
                    />

                </m.div>
            </LazyMotion>
            <h2
                className={estilos.h2}
            >
                {acf.nombre}
            </h2>
        </article>
    )
}
