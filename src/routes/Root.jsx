import React,{useState} from "react";
import { Link } from "react-router-dom";
import Pokelink from "./components/PokeLink";
import ContenedorPokeLinks from "./components/pokeLinkContenedor";
import axios from "axios";



export default function Root(){
    let [lista, setLista] = useState([])
    const baseURL = "https://pokeapi.co/api/v2/pokemon/";
    
    
    React.useEffect(() => {
        
        
        let pokemonArray = [];
        for(let i = 1; i < 152;i++){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then((response) => {
                    pokemonArray.push(response.data)
                    setLista(pokemonArray)
                    
            })
        }
        

      }, []);
      console.log(lista);

    return(
        <>
            <nav className="nav">
                <h1>Pokedex</h1>
            
            </nav>
            <ContenedorPokeLinks>
                
                {
                        lista.map((r)=>
                        <Pokelink 
                        nombre={r.name}  
                        key={r.id}
                        numero={r.id}
                       
                        />
                        )
                } 
              
            </ContenedorPokeLinks>
            
        </>
    );
}