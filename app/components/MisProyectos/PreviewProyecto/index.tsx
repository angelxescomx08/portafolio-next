import { FC, useContext, useRef } from 'react'
import { motion } from 'framer-motion'
import { useOutsideAlerter } from '../../../hooks';
import { ModalProyectoContext } from '../../../context';

import estilos from './estilos.module.css'

interface Props {
    layoutId: string | undefined;
}

export const PreviewProyecto: FC<Props> = ({ layoutId }) => {
    const { setEstaAbierto, proyecto } = useContext(ModalProyectoContext)
    const ref = useRef(null)
    useOutsideAlerter(ref, () => setEstaAbierto(false))

    return (
        <motion.div
            className={estilos.contenedor}
        >
            <motion.div className={estilos['fondo-opacidad']}
                initial={{opacity: 0}}
                animate={{opacity: .7}}
                exit={{opacity: 0}}
            />
            <motion.div
                ref={ref}
                className={estilos.proyecto}
                layoutId={layoutId}
            >
                <motion.img className={estilos.img} src={proyecto?.imagenDesktop} />
                <motion.h3 className={estilos.h3}>{proyecto?.nombre}</motion.h3>
            </motion.div>
        </motion.div>
    )
}
