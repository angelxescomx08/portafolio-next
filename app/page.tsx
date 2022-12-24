import { AcercaDeMi, MisProyectos } from './components'


import '../styles/globals.css'

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