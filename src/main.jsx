import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors:{
        primary:{
            lighter:"#30C7B5",
            neutral:"#039c89",
            dark:'#008272'
          },
          secondary:{
            lighter:'#FA7B55',
            neutral:'#DE6B48',
            dark:'#CD5A38',
          }
    }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
