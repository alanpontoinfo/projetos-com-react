import React, { useState } from 'react'
import Menu from '../Menu'
//import Sobre from './paginas/Sobre'
import Categorias from '../Categorias'
import itens from '../dados'
//import { Link } from 'react-router-dom'
//import Hero from '../componentes/Hero'
//import Banner from '../componentes/Banner'
//import Services from '../components/Services'
//import FeaturedRooms from '../components/FeaturedRooms'

const allCategorias = [...new Set(itens.map((item) => item.categoria)), 'todos']

function Bolos() {
  const [menuItens, setMenuItens] = useState(itens)
  const [categorias, setCategorias] = useState(allCategorias)

  const filtrarItens = (categoria) => {
    if (categoria === 'todos') {
      setMenuItens(itens)
      return
    }

    const novoItens = itens.filter((item) => item.categoria === categoria)
    setMenuItens(novoItens)
    setCategorias(allCategorias)
  }

  return (
    <>
      <main>
        <section className='menu section'>
          <div className='title'>
            <h2> Nosso Menu</h2>
            <div className='underline'></div>
          </div>

          <Categorias categorias={categorias} filtrarItens={filtrarItens} />
          <Menu itens={menuItens} />
        </section>
      </main>
    </>
  )
}

export default Bolos
