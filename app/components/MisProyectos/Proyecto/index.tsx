'use client'

import { FC, useContext, useRef } from 'react';
import { m, LazyMotion, domAnimation, useInView, motion } from 'framer-motion';

import estilos from './estilos.module.css'
import { ModalProyectoContext } from '../../../context/ModalProyecto/ModalProyectoContext';

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
        <motion.article
            layoutId={`${id}`}
            className={estilos['contenedor-proyecto']}
            ref={ref}
            onClick={onClick}
        >
            <LazyMotion features={domAnimation}>
                {isInView && <m.div
                    className={estilos['contenedor-imagenes']}
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : ''}
                >
                    <m.img
                        className={`${estilos['img']}`}
                        src={imagenMobile}
                        alt={nombre}
                    />

                </m.div>}
            </LazyMotion>
            <h2
                className={estilos.h2}
            >
                {nombre}
            </h2>
        </motion.article>
    )
}
