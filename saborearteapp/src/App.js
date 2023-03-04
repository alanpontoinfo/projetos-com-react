import React from 'react'

//import Menu from './Menu'
import Sobre from './paginas/Sobre'
//import Categorias from './Categorias'
//import itens from './dados'
import Bolos from './paginas/Bolos'

import './App.css'

import Home from './paginas/Home'
//import Rooms from "./pages/Rooms";
//import SingleBolo from './paginas/SingleBolo'
import Error from './paginas/Error'

import Navbar from './componentes/Navbar'

import { Routes, Route } from 'react-router-dom'
import MenuItem from './paginas/MenuItem'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Sobre' element={<Sobre />}></Route>
        <Route path='/confeitaria' element={<Bolos />}></Route>
        <Route path='/confeitaria/:slug' element={<MenuItem />}></Route>

        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
