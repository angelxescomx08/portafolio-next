'use client'

import { FC, useRef } from "react"
import { m, LazyMotion, domAnimation, useScroll, useTransform } from "framer-motion"
import parse from 'html-react-parser'

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
            <m.main className={'relative flex flex-col justify-center h-screen p-5 sm:p-40 '}
                variants={container}
                initial="hidden"
                animate="show"
                ref={ref}
            >
                <m.div
                    className={'absolute top-0 left-0 w-full h-screen flex justify-center'}
                    style={{ y, opacity }}
                >
                    <video className={'w-full h-screen object-cover'} src={video} autoPlay muted loop></video>
                </m.div>
                <m.h2 variants={item} className={'text-2xl 2xl:text-3xl xl:text-3xl'}>
                    {parse(titulo_1)}
                </m.h2>
                <m.h1 variants={item} className={'font-bold text-3xl 2xl:text-5xl xl:text-5xl mt-2 mb-2'}>
                    {parse(titulo_2)}
                </m.h1>
                <m.p variants={item} className={'text-base 2xl:text-2xl xl:text-2xl'}>
                    {parse(parrafo)}
                </m.p>
            </m.main>
        </LazyMotion>
    )
}
