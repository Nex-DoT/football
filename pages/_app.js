import '/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import Menu from '../components/menu/Menu';
export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Menu>
        <Component {...pageProps}/>
      </Menu>
    </NextUIProvider>
  )
}
