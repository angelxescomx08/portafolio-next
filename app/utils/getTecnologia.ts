import { Tecnologia } from '../interfaces'

export const getTecnologia = (tecnologias: Tecnologia[], id: number) => {
    const index = tecnologias.findIndex(tecnologia=>tecnologia.id === id)
    return tecnologias[index]
}