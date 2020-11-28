import React from 'react'
import {Link} from 'react-router-dom'
import '../../../styles/styles.css'

import {Containerheader,
    Listitem,
    Logo,
    Menunav} 
from './header.js'

const Header = () => {
    return (
        <>
        <Containerheader>
            <Link to="/home">
            <Logo 
            src="https://www.masgamers.com/wp-content/uploads/2015/11/logo-attack-on-titan.png" 
            alt="sgnk"/>
            </Link>
      
            <Menunav>
                <Link to="/home" className="textrouter">
                    <Listitem>Home</Listitem>
                </Link>
                <Link to="/personajes" className="textrouter">
                    <Listitem>Personajes</Listitem>
                </Link>
                <Link to="/titanes" className="textrouter">
                    <Listitem>Titanes</Listitem>
                </Link>
                <Link to="/curiosidades" className="textrouter">
                    <Listitem>Curiosidades</Listitem>
                </Link>
            </Menunav>
        </Containerheader>
        
     

        </>
      
    )
}

export default Header