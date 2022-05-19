import { useState, useEffect } from 'react'
import styles from './pokemon.module.css'

const Pokemon = ({url, onMostrar}) => {
  const [card, setCard] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(function (result) {
        return result.json();
      })
      .then(data => {
        console.log(data);
        setCard(data);
      })
      .catch(function (error) {
        alert(error);
      })
  }, [])

  const mostrar = () => {
    onMostrar(card)
  }

  return (
    <>
      {
        Boolean(card) && (
          <div className={styles.container} onClick={mostrar}>
            <h2>{card.name}</h2>
            <img className={styles.imagen} src={card.sprites.other['official-artwork'].front_default} />
          </div>
        ) 
      }
    </>
  )
}

export default Pokemon

//other['official-artwork'].front_default
