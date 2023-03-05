import { Metadata } from 'next'
import { AcercaDeMi, MisProyectos } from './components'

import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Portafolio - Jose Angel Hdz Rda',
  authors: [{ name: 'Jose Angel Hdz Rda' }],
  keywords: ['proyectos', 'portafolio', 'jose', 'angel', 'hdz', 'rda', 'desarrollo web', 'movil', 'programas'],
  description: 'portafolio para mostrar mis proyectos de desarrollo web, móvil, y programas de escritorio. Todo creado por mí José Ángel Hdz Rda',
  creator: 'Jose Angel Hdz Rda',
}

const Page = () => {
  return (
    <>

      {/* @ts-expect-error Server Component */}
      <AcercaDeMi />
      {/* @ts-expect-error Server Component */}
      <MisProyectos />
      
    </>
  )
}

export default Page