'use client';

import { motion, useScroll } from "framer-motion"

import estilos from './estilos.module.css'

export default function Header() {
    const { scrollYProgress } = useScroll();
    return (
        <>

            <motion.div className={estilos['barra-progreso']} style={{ scaleX: scrollYProgress }} />

        </>
    )
}
