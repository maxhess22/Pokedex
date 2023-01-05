import React , {useEffect, useState}from "react";
import { Link } from "react-router-dom";

export default function Pokelink({nombre, numero}){

    return(
        <Link>
            <div className="contenedor-link">
                <p>NRO #{numero}</p>
                <p>{nombre}</p>
            </div>
        </Link>

    );

}