import { FC, useContext, useRef } from 'react'
import { motion } from 'framer-motion'
import { useOutsideAlerter } from '../../../hooks'
import { ModalProyectoContext } from '../../../context'

import { Tecnologia } from '../../../interfaces'
import { getTecnologia } from '../../../utils'
import estilos from './estilos.module.css'

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
            className={estilos.contenedor}
        >
            <motion.div className={estilos['fondo-opacidad']}
                initial={{ opacity: 0 }}
                animate={{ opacity: .9 }}
                exit={{ opacity: 0 }}
            />
            <motion.div
                ref={ref}
                className={estilos.proyecto}
                layoutId={layoutId}
            >
                <motion.img className={estilos.img} src={proyecto?.imagenDesktop} />
                <h3 className={estilos.h3}>{proyecto?.nombre}</h3>
                <div className={estilos['grid-tecnologias']}>
                    {
                        proyecto?.tecnologias.map(tecnologia => (
                            <span key={tecnologia} className={estilos.tecnologia}>
                                {getTecnologia(tecnologias, tecnologia).name}
                            </span>
                        ))
                    }
                </div>
            </motion.div>
        </motion.div>
    )
}
