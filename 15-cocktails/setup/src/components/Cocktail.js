import React from 'react'
import { Link } from 'react-router-dom'

export default function Cocktail({ imagem, nome, id, info, copo }) {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={imagem} alt={nome} />
      </div>
      <div className='cocktail-footer'>
        <h3>{nome}</h3>
        <h4>{copo}</h4>
        <p>{info}</p>
        <Link to={`cocktail/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  )
}
