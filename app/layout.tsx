'use client'

import { Roboto } from '@next/font/google'

import { Header } from './components'
import { ModalProyectoProvider } from './context';

const inter = Roboto({
  weight: ['400', '700']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang='es'>
      <head />
      <ModalProyectoProvider>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </ModalProyectoProvider>
    </html>
  )
}
