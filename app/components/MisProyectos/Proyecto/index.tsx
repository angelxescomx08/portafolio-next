'use client'

import { FC, useRef } from 'react';
import { useInView } from "framer-motion";
import { m, LazyMotion, domAnimation } from 'framer-motion'

import estilos from './estilos.module.css'

interface Props {
    id: number;
    nombre: string;
    imagen1: string;
    imagen2: string;
    tecnologias: number[];
    container: any;
    item: any;
}

export const Proyecto: FC<Props> = ({ nombre, container, item, imagen1, imagen2 }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

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
                        src={imagen2}
                        variants={item}
                        alt={nombre}
                    />

                    <m.img
                        className={`${estilos['img']} ${estilos.img1}`}
                        src={imagen1}
                        variants={item}
                        alt={nombre}
                    />

                </m.div>
            </LazyMotion>
            <h2
                className={estilos.h2}
            >
                {nombre}
            </h2>
        </article>
    )
}
