import React from 'react'
import Header from './components/header/Header'
import Body from './components/body/body'
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <div>
      <Header/>
      <Body/>
    </div>
  )
}

export default App
