import React from 'react'
//import Loading from '../componentes/Loading'
import { useParams, Link } from 'react-router-dom'
import itens from '../dados'
import Error from '../paginas/Error'

export default function MenuItem() {
  const { slug } = useParams()
  // const [loading, setLoading] = React.useState(false)
  const [menuItem, setMenuItem] = React.useState()

  React.useEffect(() => {
    // setLoading(true)
    function getMenuItem() {
      try {
        const response = itens
        //const data = data1.json()
        const data = response.find((list) => list.slug === slug)
        console.log(data)

        setMenuItem(data)
      } catch (error) {
        console.log(error)
      }
    }

    getMenuItem()
  }, [slug])

  if (!menuItem) {
    return <Error />
  } else {
    const { titulo, img, categoria, preco, desc } = menuItem

    return (
      <section className='section cocktail-section'>
        <Link to='/confeitaria' className='btn btn-primary'>
          Retornar
        </Link>

        <h2 className='section-title'>{titulo}</h2>
        <div className='drink'>
          <img src={img} alt={titulo}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>nome : </span> {titulo}
            </p>
            <p>
              <span className='drink-data'>categoria:</span> {categoria}
            </p>
            <p>
              <span className='drink-data'>Preco :</span>
              {preco}
            </p>
            <p>
              <span className='drink-data'> Descricao :</span> {desc}
            </p>
          </div>
        </div>
      </section>
    )
  }
}
