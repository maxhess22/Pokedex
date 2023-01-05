import VistaPokemon from "./components/VistaPokemon";
import React from "react";
import axios from "axios";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";



export default function Pokemon(){
    let [imagen, setImagen] = useState([])
    let [pokemon, setPokemon] = useState({})
    useEffect(() => {
       axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
        .then((response) => {setImagen(response.data.sprites.front_default)})
        axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
        .then((response) => {setPokemon(response.data)})
        console.log(pokemon);
       
        }, []);

    



    return(
        <VistaPokemon>
            <Link to="/">Home</Link>
            <img src={imagen} alt="" />
        </VistaPokemon>
        )

    }