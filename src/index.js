import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './components/App'
//import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <ChakraProvider>
    <ColorModeScript initialColorMode="light" />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
