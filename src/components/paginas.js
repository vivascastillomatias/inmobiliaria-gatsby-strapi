import React from 'react';
import Iconos from './iconos';
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import Layout from './Layout'
import {graphql} from 'gatsby'

const ContenidoPagina = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media(min-width: 768px){
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }

`;

export const query = graphql`
    query($id: String!){
        query: allStrapiPaginas(filter: {id: {eq: $id}}){
            nodes{
            id
            nombre
            contenido
            imagen{
                sharp: childImageSharp{
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid_withWebp
                }
                }
            }
            }
        }
    }
`;



const Paginas = ({data: {query: {nodes}}}) => {
    const { nombre, contenido, id, imagen } = nodes[0]
    return (
        <Layout>
            <main className='contenedor'>
                <h1>{nombre}</h1>
                <ContenidoPagina>
                    <Image fluid={imagen.sharp.fluid}/>
                    <p>{contenido}</p>
                </ContenidoPagina>
            </main>
        </Layout>
    )
}

export default Paginas
