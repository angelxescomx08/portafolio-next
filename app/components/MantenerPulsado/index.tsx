import { motion } from "framer-motion"

export const MantenerPulsado = () => {
    return (
        <motion.img
            className='absolute bottom-2 right-2 w-20 cursor-pointer hidden sm:block'
            style={{
                filter: 'invert(97%) sepia(100%) saturate(0%) hue-rotate(24deg) brightness(103%) contrast(104%)'
            }}
            whileHover={{
               scale: 1.1,
            }}
            src="/touch.svg"
            alt="touch-icon"
        />
    )
}
