import { Header } from './components';
import { ThemeProvider } from './theme';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
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
