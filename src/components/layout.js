import React from 'react';
import Helmet from 'react-helmet'
import GlobalCss from './globalCss';
import Header from './header';

const Layout = ({children}) => {
    return (
        <>
            <GlobalCss/>
            <Helmet>
                <title>Bienes Raices - Gatsby</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
            </Helmet>
            <Header/>
            {children}
        </>
    )
}

export default Layout
