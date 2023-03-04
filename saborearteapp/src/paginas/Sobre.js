import React from 'react'
//import StyledHero from '../componentes/StyledHero'
import defaultImg from '../imagens/logo-11.jpg'

const Sobre = () => {
  return (
    <section className='section about-section'>
      <img src={defaultImg} className='photo' alt='sobre' />
      <h1 className='section-title'>Sobre Nós</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        repudiandae architecto qui adipisci in officiis, aperiam sequi atque
        perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur
        nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione
        hic aspernatur error blanditiis?
      </p>
    </section>
  )
}

export default Sobre
