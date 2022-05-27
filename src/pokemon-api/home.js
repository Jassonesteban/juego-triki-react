import React, { useEffect, useState } from 'react';

export function Pokemon() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pokemones, setPokemones] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setPokemones(result.results);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if(error){
        return <div>Error: {error}</div>
    } else if (!isLoaded) {
        return <div>Cargando pokemones....Por favor espere</div>
    } else {
        return (
            <ul>
                {pokemones.map(pokemon => (
                    <li key={pokemon.url}>{pokemon.name}</li>
                ))}
            </ul>
        );
    }
}