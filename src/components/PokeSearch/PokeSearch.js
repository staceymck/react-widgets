import React, { useState, useEffect } from 'react';
import styles from './PokeSearch.module.css';

export default function PokeSearch() {

  const [term, setTerm] = useState('');
  // const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [pokemon, setPokemon] = useState(null);
  const [message, setMessage] = useState('');
  const [activeSprite, setActiveSprite] = useState("front_default");

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setDebouncedTerm(term.toLowerCase())
  //   }, 1000)

  //   return () => {
  //     clearTimeout(timerId);
  //   }
  // }, [term])

  //clear any alert/error messages with each new search
  // useEffect(() => {
  //   setMessage('')
  // }, [term, debouncedTerm, pokemon])


  // useEffect(() => {
  //   if (term) {
  //     const apiUrl = `https://pokeapi.co/api/v2/pokemon/${term}`
  //     const getPoke = () => {
  //       fetch(apiUrl)
  //       .then(res => {
  //         if (res.status === 404) {
  //           setMessage("No results")
  //         } else if (!res.ok) {
  //           const msg = `${res.status}: ${res.statusText}`
  //           throw new Error(msg)
  //         } else {
  //           return res.json()
  //         }
          
  //       })
  //       .then(data => {
  //         setActiveSprite("front_default")
  //         setPokemon(data)
  //       })
  //       .catch(error => setMessage(error.message))
  //     }
  //     getPoke()
  //     console.log(pokemon)
  //   }

  // }, [term])

  const capitalize = word => {
    return word[0].toUpperCase() + word.slice(1)
  }

  const handleClick = () => {
    activeSprite === "front_default" ? 
      setActiveSprite("back_default") : 
      setActiveSprite("front_default")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon(`https://pokeapi.co/api/v2/pokemon/${term}`)
    console.log(pokemon)
  }

  const getPokemon = (apiUrl) => {
    fetch(apiUrl)
    .then(res => {
      if (res.status === 404) {
        setMessage("No results")
        console.log("no results")
      } else if (!res.ok) {
        const msg = `${res.status}: ${res.statusText}`
        throw new Error(msg)
      } else {
        return res.json()
      }
    })
    .then(data => {
      if(data) {
        setMessage('')
      }
      setActiveSprite("front_default")
      setPokemon(data)
    })
    .catch(error => setMessage(error.message))
  }

  return (
    <div className={styles.container}>
      <h1>PokeSearch</h1>
      <div className={styles.field}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label className={styles.label}>Search:</label>
          <input className={styles.input} placeholder="Enter a name" type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
          <input className={styles.search} type="submit" value="Go"/>
        </form>
      </div>

      {/* show message if error or no results */}
      {message &&
        <div className={styles.alertMessage}>
          {message}
        </div>
      } 

      {/* show pokemon details if search is successful */}
      {pokemon &&
        <div className={styles.resultsBlock}>
          <img 
            className={styles.sprite}
            src={pokemon["sprites"][activeSprite]}
            alt={pokemon.name}
            onClick={handleClick}
          />
          <div>
            <span className={styles.attributeName}>Name:</span>
            {capitalize(pokemon.name)}<br></br>
            <span className={styles.attributeName}>Weight:</span>
            {pokemon.weight}<br></br>
            <span className={styles.attributeName}>Height:</span>
            {pokemon.height}
          </div>
          <button 
            className={styles.shine}
            onClick={() => setActiveSprite("front_shiny")}
            disabled={activeSprite === "front_shiny" ? true : false}
          >
            Shine!
          </button>
        </div>

      }
   </div>
  )
}