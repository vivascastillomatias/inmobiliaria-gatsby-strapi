/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const urlSlug = require('url-slug')


exports.createPages = async ({actions, graphql, reporter}) => {
    const resultado = await graphql(`
    query{
        allStrapiPaginas(filter: {nombre: {ne: "Inicio"}}){
            nodes{
                nombre
                id
            }
        }
        allStrapiPropiedades{
        nodes{
            nombre
            id
        }
        
        }
    }
    `);

    if (resultado.errors) {
        reporter.panic('No hubo resultados', resultado.errors);
    }
    
    const propiedades = resultado.data.allStrapiPropiedades.nodes;
    const paginas = resultado.data.allStrapiPaginas.nodes;

    //Crear templates para paginas
    paginas.forEach(pagina => {
        actions.createPage({
            path: urlSlug( pagina.nombre ),
            component: require.resolve('./src/components/paginas.js'),
            context: {
                id: pagina.id
            }
        })
    });
    
    //Crear templates para propiedades
    propiedades.forEach(propiedad => {
        actions.createPage({
            path: urlSlug( propiedad.nombre ),
            component: require.resolve('./src/components/propiedades.js'),
            context: {
                id: propiedad.id
            }
        })
    });
}

