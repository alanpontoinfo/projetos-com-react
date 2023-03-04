import React from 'react'
import { useGlobalContext } from '../context'

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchCocktail() {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='nome'>Pesquise seu cocktel favorito</label>
          <input
            type='text'
            name='nome'
            id='nome'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}
