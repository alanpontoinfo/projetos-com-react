import React from 'react'
//import Menu from '../Menu'
//import Sobre from './paginas/Sobre'
//import Categorias from '../Categorias'
//import itens from '../dados'
import { Link } from 'react-router-dom'
import Hero from '../componentes/Hero'
import Banner from '../componentes/Banner'
//import Services from '../components/Services'
//import FeaturedRooms from '../components/FeaturedRooms'

//const allCategorias = ['todos', ...new Set(itens.map((item) => item.categoria))]

function Home() {
  return (
    <>
      <Hero>
        <Banner title='Sabor & Arte' subtitle='Confeitaria Artesanal'>
          <Link to='/confeitaria' className='btn-primary'>
            Nossas Delicias
          </Link>
        </Banner>
      </Hero>
    </>
  )
}

export default Home
