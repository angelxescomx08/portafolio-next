import { ModalProyectoState } from './';
import { ProyectoMini } from '../../interfaces';

type ModalProyectoActionType =
    | { type: '[ModalProyecto] - setEstaAbierto', payload: boolean }
    | { type: '[ModalProyecto] - setLayoutId', payload: string }
    | { type: '[ModalProyecto] - setProyecto', payload: ProyectoMini }

export const modalProyectoReducer = (state: ModalProyectoState, action: ModalProyectoActionType): ModalProyectoState => {
    switch (action.type) {
        case '[ModalProyecto] - setEstaAbierto':
            return {
                ...state,
                estaAbierto: action.payload
            }
        case '[ModalProyecto] - setLayoutId':
            return {
                ...state,
                layoutId: action.payload
            }
        case '[ModalProyecto] - setProyecto':
            return {
                ...state,
                proyecto: action.payload
            }

        default:
            return state;
    }
}