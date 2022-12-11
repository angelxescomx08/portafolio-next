import { Roboto } from '@next/font/google'
import { Header } from './components'
import { ThemeProvider } from './theme'

const inter = Roboto({
  weight: ['400','700']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <head />
      <body className={inter.className}>
        <ThemeProvider>
          <>
            <Header />
            {children}
          </>
        </ThemeProvider>
      </body>
    </html>
  )
}
