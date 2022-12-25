'use client'

import { FC, useRef } from 'react';

import { useInView } from "framer-motion";
import { m, LazyMotion, domAnimation } from 'framer-motion'

import { Acf } from '../../../interfaces'

import estilos from './estilos.module.css'

interface Props {
    id: number;
    acf: Acf;
    tecnologias: string[];
    container: any;
    item: any;
}

export const Proyecto: FC<Props> = ({ acf, container, item }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <LazyMotion features={domAnimation}>
            <m.article
                className={estilos['contenedor-proyecto']}
                ref={ref}
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : ''}>
                <m.div className={estilos['contenedor-imagenes']}>

                    <m.img
                        className={`${estilos['img']} ${estilos.img2}`}
                        src={acf.imagenes.imagen_2}
                        variants={item}
                        alt={acf.nombre}
                    />

                    <m.img
                        className={`${estilos['img']} ${estilos.img1}`}
                        src={acf.imagenes.imagen_1}
                        variants={item}
                        alt={acf.nombre}
                    />

                </m.div>
                <m.h2
                    className={estilos.h2}
                    variants={item}
                >
                    {acf.nombre}
                </m.h2>
            </m.article>
        </LazyMotion>
    )
}
