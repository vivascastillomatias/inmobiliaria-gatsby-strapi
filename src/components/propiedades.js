import React from 'react';
import Iconos from './iconos';
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import Layout from './Layout'
import {graphql} from 'gatsby'

const Contenido = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media(min-width: 768px){
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }

`;

const Sidebar = styled.aside`
    .precio{
        text-align: center;
        font-size: 4rem;
        color: #75AB00;
    }
    .agente{
        margin-top: 4rem;
        border-radius: 2rem;
        padding: 3rem;
        background-color: #75AB00;
        color: #FFFFFF;

        p{
            margin: 0;
        }
    }
`;

export const query = graphql`
    query($id: String){
        query: allStrapiPropiedades(filter: {id: {eq: $id}}) {
            nodes {
            nombre
            estacionamiento
            descripcion
            wc
            precio
            agentes{
                nombre
                telefono
                email
            }
            imagen{
                sharp: childImageSharp{
                            fluid(maxWidth:1200){
                                ...GatsbyImageSharpFluid_withWebp
                }
                }
            }
            }
        }
    }
`;


const Propiedades = ({data: {query: {nodes}}}) => {
    const { nombre, descripcion, estacionamiento, habitaciones, wc, precio,agentes, imagen } = nodes[0]
    return (
        <Layout>
            <h1>{nombre}</h1>
            <Contenido>
                <main>
                    <Image fluid={imagen.sharp.fluid}/>
                    <p>{descripcion}</p>
                </main>
                <Sidebar>
                    <p className='precio'>{precio}</p>
                    <Iconos
                        wc={wc}
                        estacionamiento={estacionamiento}
                        habitaciones={habitaciones}
                    />
                    <div className='agente'>
                        <h2>Vendedor:</h2>
                        <p>{agentes.nombre}</p>
                        <p>{agentes.telefono}</p>
                        <p>{agentes.email}</p>
                    </div>
                </Sidebar>
            </Contenido>
        </Layout>
    )
}

export default Propiedades
