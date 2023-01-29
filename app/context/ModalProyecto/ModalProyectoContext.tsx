'use client'

import { createContext } from 'react';
import { ProyectoMini } from '../../interfaces';

interface ContextProps {
    layoutId: string;
    estaAbierto: boolean;
    proyecto: ProyectoMini | null;
    setEstaAbierto: (valor: boolean) => void;
    setLayoutId: (valor: string) => void;
    setProyecto: (proyecto: ProyectoMini) => void;
}

export const ModalProyectoContext = createContext({} as ContextProps);