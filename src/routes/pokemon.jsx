import VistaPokemon from "./components/VistaPokemon";
import React from "react";
import axios from "axios";
import { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";



export default function Pokemon(){
    let { id } = useParams();
    let [imagen, setImagen] = useState([])
    let [pokemon, setPokemon] = useState({})
    useEffect(() => {
       axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {setImagen(response.data.sprites.front_default)})
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {setPokemon(response.data)})
        console.log(pokemon);
       
        }, []);

    



    return(
        <VistaPokemon>
            
            <img src={imagen} alt="" />
            <p>{pokemon.name}</p>
            <p>Peso {pokemon.weight}</p>
            <Link to="/">Home</Link>
        </VistaPokemon>
        )

    }