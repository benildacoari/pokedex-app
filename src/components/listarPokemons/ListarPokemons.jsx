import { useState} from 'react';
import Pokemon from '../pokemon/Pokemon'; 
import './listarPokemons.css'

const ListarPokemons = ({pokemones}) => {
    const [descripcionPokemon, setDescripcionPokemon] = useState(null);

    const onMostrar = (pok) => {
        setDescripcionPokemon(pok);
    }
    
    // console.log(descripcionPokemon);
    return (
        <>
        <div className='main'>
            {
                pokemones.map((pokemon) => {
                    const { name, url } = pokemon
                    return (
                        <Pokemon key={name} url={url} onMostrar={onMostrar}/>
                        //<p>hola</p>
                    )
                })
            }
            
            
        </div>
        <div>
            {
                descripcionPokemon && (
                    <>
                        <p>Base Experience: {descripcionPokemon.base_experience}</p>
                        <p>Weight: {descripcionPokemon.weight}</p>
                        <p>Habilidades:</p>
                        <ul>{descripcionPokemon.abilities.map ((poke)=>{
                            return <li>{poke.ability.name}</li>
                        }
                        )
                    }</ul>
                        
                    </>
                )
            }
        </div>
        </>
    )
}

export default ListarPokemons

// const [elemento, setElemento] = useState(["z"]);
    // const [verifica, setVerifica] = useState(false);

    // const agregar = () => {
    //     setElemento([...elemento, "a","b","c","d"]);
    // } 

    // const ocultar = () => {
    //     setVerifica(!verifica);
    // }

    // return (
    //     <div>
    //         <button onClick={agregar}>Agregar</button>

    //         <button onClick={ocultar}>{!verifica ? "Mostrar" : "Ocultar"}</button>

    //         {verifica ? elemento.map((e,i) => (
    //             <h2 key={i}>{e}</h2>
    //         )) :
    //         " "
    //         }


    //     </div>

    // )