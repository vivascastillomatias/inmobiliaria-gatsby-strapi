import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";


const Formulario = styled.form`
    width: 100%;
    display: flex;
    border: 1px solid #E1E1E1;
    max-width: 1200px;
    margin: 2rem 0 auto;
`;

const Select = styled.select`
    flex: 1;
    padding: 1rem;
    appearance: none;
    border: nonde;
    font-family: 'Lato', sans-serif;
`;

const useFiltro = () => {
    const [categoria, setCategoria] = useState('')

    const resultado = useStaticQuery(graphql`
        query{ 
            allStrapiCategorias{
            nodes{
                id
                nombre
            }
            }
        }
        `);
        // setCategorias(resultado.allStrapiCategorias.nodes);
        const categorias = resultado.allStrapiCategorias.nodes
        

    const FiltroUI = () => (
        <Formulario>
            <Select
                onChange={e=> setCategoria(e.target.value)}
                value={categoria}
            >
                <option value="">-- Filtrar --</option>
                {categorias.map((cat)=> <option value={cat.nombre} key={'categoria-'+cat.id}>{cat.nombre}</option>)}
            </Select>
        </Formulario>
        )

    return {categoria, FiltroUI}
    
}

export default useFiltro

