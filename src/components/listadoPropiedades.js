import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import usePropiedades from '../hooks/usePropiedades';
import PropiedadPreview from './propiedadPreview';
import {propiedades as propiedadesCSS} from '../css/listadoPropiedades.module.css'
import useFiltro from '../hooks/useFiltro';

const ListadoPropiedades = () => {

    const resultado = usePropiedades();

    const [propiedades, setPropiedades] = useState(resultado)
    const [filteredPropiedades, setFilteredPropiedades] = useState([])

    //Filtrado de propiedades
    const {categoria, FiltroUI} = useFiltro();

    useEffect(() => {
        
        if (categoria) {
            setFilteredPropiedades(propiedades.filter( p => p.categoria.nombre === categoria))
        } else {
            setFilteredPropiedades(propiedades)
        }

    }, [categoria])

    return (
        <div>
            <h2>Nuestras propiedades</h2>
            {FiltroUI()}
            {filteredPropiedades.length ? (

            <ul className={propiedadesCSS}>

                {filteredPropiedades.map(propiedad => (
                    <PropiedadPreview key={propiedad.id} propiedad={propiedad}  />
                )) }
            </ul>
                
                ):
                
            <h2>No hay resultados para la categoria <strong>{categoria}</strong></h2>
            
        }
        </div>
    )
}

export default ListadoPropiedades
