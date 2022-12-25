'use client'

import { FC, useRef } from 'react';

import { useInView } from "framer-motion";
import { motion, LazyMotion, domAnimation } from 'framer-motion'

import { Acf } from '../../../interfaces';

import estilos from './estilos.module.css'

const container = {
    hidden: { opacity: 0, scale: 0 },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            staggerChildren: .3
        }
    }
}

const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
}

interface Props {
    id: number;
    acf: Acf;
    tecnologias: string[];
}

export const Proyecto: FC<Props> = ({ acf, tecnologias }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <LazyMotion features={domAnimation}>
            <motion.article
                className={estilos['contenedor-proyecto']}
                ref={ref}
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : ''}>
                <motion.div className={estilos['contenedor-imagenes']}>

                    <motion.img
                        className={`${estilos['img']} ${estilos.img2}`}
                        src={acf.imagenes.imagen_2}
                        variants={item}
                        alt={acf.nombre}
                    />

                    <motion.img
                        className={`${estilos['img']} ${estilos.img1}`}
                        src={acf.imagenes.imagen_1}
                        variants={item}
                        alt={acf.nombre}
                    />

                </motion.div>
                <motion.h2
                    className={estilos.h2}
                    variants={item}
                >
                    {acf.nombre}
                </motion.h2>
            </motion.article>
        </LazyMotion>
    )
}
