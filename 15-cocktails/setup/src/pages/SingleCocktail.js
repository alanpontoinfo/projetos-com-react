import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

export default function SingleCocktail() {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        )
        const data = await response.json()
        if (data.drinks) {
          const {
            strDrink: nome,
            strDrinkThumb: imagem,
            strAlcoholic: info,
            strCategory: categoria,
            strGlass: copo,
            strInstructions: instrucoes,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredientes = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            nome,
            imagem,
            info,
            categoria,
            copo,
            instrucoes,
            ingredientes,
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getCocktail()
  }, [id])
  if (loading) {
    return <Loading />
  }

  if (!cocktail) {
    return <h2 className='section-title'> nococktail to display</h2>
  } else {
    const { nome, imagem, categoria, info, copo, instrucoes, ingredientes } =
      cocktail

    return (
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{nome}</h2>
        <div className='drink'>
          <img src={imagem} alt={nome}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'> nome:</span>
              {nome}
            </p>
            <p>
              <span className='drink-data'>categoria:</span>
              {categoria}
            </p>
            <p>
              {' '}
              <span className='drink-data'> info:</span>
              {info}
            </p>
            <p>
              <span className='drink-data'> copo:</span> {copo}
            </p>
            <p>
              <span className='drink-data'>instrucoes:</span>
              {instrucoes}
            </p>
            <p>
              <span className='drink-data'>ingredientes:</span>
              {ingredientes.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null
              })}
            </p>
          </div>
        </div>
      </section>
    )
  }
}
