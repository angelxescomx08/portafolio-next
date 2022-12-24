'use client'

import { FC } from "react"
import { motion, LazyMotion, domAnimation } from "framer-motion"
import parse from 'html-react-parser'

import styles from './styles.module.css'

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 1
        }
    }
}

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

interface Props {
    titulo_1: string;
    titulo_2: string;
    parrafo: string;
}

export const Datos: FC<Props> = ({ titulo_1, titulo_2, parrafo }) => {
    return (
        <LazyMotion features={domAnimation}>
            <motion.main className={styles.main}
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.h2 variants={item} className={styles.h2}>{parse(titulo_1)}</motion.h2>
                <motion.h1 variants={item} className={styles.h1}>{parse(titulo_2)}</motion.h1>
                <motion.p variants={item} className={styles.p}>{parse(parrafo)}</motion.p>
            </motion.main>
        </LazyMotion>
    )
}
