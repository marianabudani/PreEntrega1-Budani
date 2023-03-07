import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGFQBz0jfNn_5YuKPOqHuR2lg1lPqrXE8",
  authDomain: "umbrella-react-f9fb2.firebaseapp.com",
  projectId: "umbrella-react-f9fb2",
  storageBucket: "umbrella-react-f9fb2.appspot.com",
  messagingSenderId: "640846452948",
  appId: "1:640846452948:web:1b7ca7c92ebcfb26c08341"
};

// Inicializar Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
