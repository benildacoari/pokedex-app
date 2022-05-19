import { useState, useEffect } from 'react'
import './App.css'
import ListarPokemons from './components/listarPokemons/ListarPokemons'
import Busqueda from './components/busqueda/Busqueda'

const App = () => {
  const [pokemons, setPokemon] = useState([]);
  const [campoFiltrado, setCampoFiltrado] = useState("");
  const [pokemonFiltrado, setPokemonFiltrado] = useState(pokemons);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
      .then(function (result) {
        return result.json();
      })
      .then(pokemon => {
        // console.log(pokemon.results)
        setPokemon(pokemon.results)
        setPokemonFiltrado(pokemon.results)
      })
      .catch(function (error) {
        alert(error);
      })
  }, [])


  const buscar = () => {
    console.log(campoFiltrado);
    const nuevoPokemonFiltrado = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(campoFiltrado.toLowerCase());
      // return pokemon.name;
    });
    setPokemonFiltrado(nuevoPokemonFiltrado);
  };

  const onSearchChangeHandler = (event) => {
    setCampoFiltrado(event.target.value);
  };

  return (
    <div className="app">
      <header className="App-header">
        <Busqueda onSearchChange={onSearchChangeHandler} onBuscar={buscar}/>
        <ListarPokemons pokemones={pokemonFiltrado} />
        {/* <p>{pokemons[0].name}</p> */}
      </header>
    </div>
  )
}

export default App
