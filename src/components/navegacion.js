import React from 'react';
import {graphql, Link, useStaticQuery} from 'gatsby'

import urlSlug from 'url-slug';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;

    @media(min-width: 768px){
        padding: 0;
        flex-direction: row;
    }

`

const NavLink = styled(Link)`
    color: #FFF;
    font-weight: 700;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: .5rem;
    margin-right: 1rem;
    &:last-of-type{
        margin-right: 0;
    }
    &.pagina-actual{
        border-bottom: 2px solid;
    }
`

const Navegacion = () => {
    const result = useStaticQuery(graphql`
        query{
            allStrapiPaginas{
                nodes{
                    id
                    nombre
                }
            }
        }
    `);
    const pages = result.allStrapiPaginas.nodes
    return (
        <Nav>
            {pages.map(
                
                p => {
                    if (p.nombre === 'Inicio') {
                        return <NavLink to={'/'} key={'nav-'+p.id} activeClassName={'pagina-actual'}>{p.nombre}</NavLink>
                    } else {
                        return <NavLink to={'/'+urlSlug(p.nombre)} key={'nav-'+p.id} activeClassName={'pagina-actual'}>{p.nombre}</NavLink>
                    }
                }
                
                )}
        </Nav>
    )
}

export default Navegacion
