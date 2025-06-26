import '../styles/globals.css'
import { Open_Sans, Oswald } from 'next/font/google'
import Header from "../components/Header.jsx"

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-openSans' })
const oswald = Oswald({ weight: ['600'], subsets: ['latin'], variable: '--font-oswald' })

export const metadata = {
  title: 'Kinal Rami Portfolio',
  description: 'Frontend Developer',
  icons: {
    icon: '/kinalrami-favicon.ico', 
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${oswald.variable} antialiased`}
      >
        <Header/>
         <main className="relative z-0 -top-4">
          {children}
        </main>
      </body>
    </html>
  );
}
