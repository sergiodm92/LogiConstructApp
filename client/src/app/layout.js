import  Navbar  from './components/Navbar/Navbar'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children
}) {


  const location = children?.props.childProp.segment ?? "";

  return (
    <html lang="en">
      <body>
        <>
        {location !==""?<Navbar/>:null}
        {children}
        </>
        </body>
        
    </html>
  )
}
