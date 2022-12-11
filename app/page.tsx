import { AcercaDeMi } from './components'


import '../styles/globals.css'

const Page = () => {
  return (
    <>

      {/* @ts-expect-error Server Component */}
      <AcercaDeMi />
    </>
  )
}

export default Page