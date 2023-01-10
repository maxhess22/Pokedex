import React , {useEffect, useState}from "react";
import { Link } from "react-router-dom";

export default function Pokelink({nombre, numero, to}){

    return(
        <Link>
            <div className="contenedor-link">
                <p>NRO #{numero} {nombre}</p>
                <Link to={to}>Conocer</Link>
            </div>
        </Link>

    );

}