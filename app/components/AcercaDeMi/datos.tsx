'use client'

import { FC, useRef } from "react"
import { m, LazyMotion, domAnimation, useScroll, useTransform } from "framer-motion"
import parse from 'html-react-parser'

import estilos from './styles.module.css'

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
    video?: string;
}

export const Datos: FC<Props> = ({ titulo_1, titulo_2, parrafo, video }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const opacity = useTransform(scrollYProgress, [0, 1], [.2, 0])

    return (
        <LazyMotion features={domAnimation}>
            <m.main className={estilos.main}
                variants={container}
                initial="hidden"
                animate="show"
                ref={ref}
            >
                <m.div
                    className={estilos['contenedor-video']}
                    style={{ y, opacity }}
                >
                    <video className={estilos.video} src={video} autoPlay muted loop></video>
                </m.div>
                <m.h2 variants={item} className={estilos.h2}>
                    {parse(titulo_1)}
                </m.h2>
                <m.h1 variants={item} className={estilos.h1}>
                    {parse(titulo_2)}
                </m.h1>
                <m.p variants={item} className={estilos.p}>
                    {parse(parrafo)}
                </m.p>
            </m.main>
        </LazyMotion>
    )
}
