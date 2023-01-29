'use client'

import { FC, useContext, useRef } from 'react'
import { motion } from 'framer-motion'
import { useOutsideAlerter } from '../../../hooks'
import { ModalProyectoContext } from '../../../context'

import { Tecnologia } from '../../../interfaces'
import { getTecnologia } from '../../../utils'

interface Props {
    layoutId: string | undefined;
    tecnologias: Tecnologia[];
}

export const PreviewProyecto: FC<Props> = ({ layoutId, tecnologias }) => {
    const { setEstaAbierto, proyecto } = useContext(ModalProyectoContext)
    const ref = useRef(null)
    useOutsideAlerter(ref, () => setEstaAbierto(false))

    return (
        <motion.div
            className={'fixed top-0 w-screen h-screen flex justify-center items-center'}
        >
            <motion.div className={'fixed top-0 w-screen h-screen bg-neutral-900'}
                initial={{ opacity: 0 }}
                animate={{ opacity: .9 }}
                exit={{ opacity: 0 }}
            />
            <motion.div
                ref={ref}
                style={{ width: 800, maxWidth: '95%' }}
                className={'relative z-50 bg-neutral-800 p-5 rounded-2xl shadow-black shadow-2xl'}
                layoutId={layoutId}
            >
                <motion.img
                    className={'w-full aspect-video object-cover rounded-lg'}
                    src={proyecto?.imagenDesktop}
                />
                <h3 className={'text-lg md:text-2xl m-0'}>{proyecto?.nombre}</h3>
                <div className={'mt-3'}>
                    {
                        proyecto?.tecnologias.map(tecnologia => (
                            <span key={tecnologia} className={'py-1 px-3 bg-emerald-600 mr-2 rounded-2xl'}>
                                {getTecnologia(tecnologias, tecnologia).name}
                            </span>
                        ))
                    }
                </div>
            </motion.div>
        </motion.div>
    )
}
