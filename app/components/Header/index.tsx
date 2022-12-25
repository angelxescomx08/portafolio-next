'use client';

import { motion, useScroll } from "framer-motion"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import estilos from './estilos.module.css'

export default function Header() {
    const { scrollYProgress } = useScroll();
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{ top: 0 }}>
                    <motion.div className={estilos['barra-progreso']} style={{ scaleX: scrollYProgress }} />
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
