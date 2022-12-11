import { Suspense } from 'react'
import { AcercaDeMi } from './components'

import '../styles/globals.css'

const Page = () => {
  return (
    <>
      <Suspense fallback={<p>Cargando...</p>}>
        {/* @ts-expect-error Server Component */}
        <AcercaDeMi />
      </Suspense>
    </>
  )
}

export default Page