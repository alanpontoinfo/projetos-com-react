import React from 'react'

const Categorias = ({ categorias, filtrarItens }) => {
  return (
    <div className='btn-container'>
      {categorias.map((categoria, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={index}
            onClick={() => filtrarItens(categoria)}
          >
            {categoria}
          </button>
        )
      })}
    </div>
  )
}

export default Categorias
