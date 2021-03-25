import React from 'react';
import Iconos from './iconos';
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import {Link} from 'gatsby'
import urlSlug from 'url-slug'

const Boton = styled(Link)`
 margin-top: 2rem;
 padding: 1rem;
 background-color: #75ab00;
 width: 100%;
 color: #ffffff;
 display:block;
 text-decoration: none;
 text-align: center;
 font-weight: 700;
 text-transform: uppercase;
`;

const Card = styled.div`
    border: 1px solid #E1E1E1;
    img{
        max-width: 100%
    }
`;

const Contenido = styled.div`
    padding: 2 rem;
    h3{
        font-family: 'Lato', sans-serif;
        margin: 0 0 2rem 0;
        font-size: 2.4 rem;
    }
    .precio{
        font-size: 2rem;
        color: #78AB00;
    }
`;


const PropiedadPreview = ({propiedad}) => {
    const {nombre, descripcion, imagen, wc, estacionamiento, habitaciones, precio} = propiedad;
    return (
        <Card>
            <Image fluid={imagen.sharp.fluid}/>
            <Contenido>
                <h3>{nombre}</h3>
                <p className='precio'>{precio}</p>
                <Iconos
                    wc={wc}
                    estacionamiento={estacionamiento}
                    habitaciones={habitaciones}
                />
            </Contenido>

            <Boton to={urlSlug(nombre)}>
                Ver!
            </Boton>
        </Card>
    )
}

export default PropiedadPreview
