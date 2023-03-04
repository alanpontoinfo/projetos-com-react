import React from 'react'
import { Link } from 'react-router-dom'
//import { memo } from 'react'
//const Room = memo(({ room }) => {
//const { name, slug, images, price } = room;

const Menu = ({ itens }) => {
  // const { id, titulo, img, desc, preco, categoria } = itens
  return (
    <div className='cocktails-center'>
      {itens.map((menuItem) => {
        const { id, titulo, img, preco, slug } = menuItem
        return (
          <article key={id} className='cocktail'>
            <img src={img} alt={titulo} className='img-container' />
            <div className='cocktail-footer'>
              <header>
                <h4>{titulo}</h4>
                <h4 className='price'>${preco}</h4>
              </header>

              <Link
                to={`/confeitaria/${slug}`}
                className='btn btn-primary btn-details'
              >
                detalhes
              </Link>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
