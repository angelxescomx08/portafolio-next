'use client'

import { FC, useReducer } from 'react';
import { ProyectoMini } from '../../interfaces';
import { ModalProyectoContext, modalProyectoReducer } from './';

interface Props {
    children: JSX.Element
}

export interface ModalProyectoState {
    layoutId: string;
    estaAbierto: boolean;
    proyecto: ProyectoMini | null;
}

const ModalProyecto_INITIAL_STATE: ModalProyectoState = {
    layoutId: '',
    estaAbierto: false,
    proyecto: null,
}

export const ModalProyectoProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(modalProyectoReducer, ModalProyecto_INITIAL_STATE)

    const setEstaAbierto = (valor: boolean) => dispatch({ type: '[ModalProyecto] - setEstaAbierto', payload: valor })
    const setLayoutId = (valor: string) => dispatch({ type: '[ModalProyecto] - setLayoutId', payload: valor })
    const setProyecto = (proyecto: ProyectoMini) => dispatch({ type: '[ModalProyecto] - setProyecto', payload: proyecto })

    return (
        <ModalProyectoContext.Provider value={{
            ...state,
            setEstaAbierto,
            setLayoutId,
            setProyecto,
        }}>
            {children}
        </ModalProyectoContext.Provider>
    )
}