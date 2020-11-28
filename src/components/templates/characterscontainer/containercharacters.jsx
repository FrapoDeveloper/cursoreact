import React from 'react'
import {Containercharacters} from './containercharacters.js'
import Cardcharacters from '../../organisms/cardcharacter/cardcharacter'
import '../../../styles/styles.css'
import Ani from '../../../assets/notfound.json'
const characterscontainer = ({personajes}) => {
    return (
        <Containercharacters>
            {
                 
            personajes.lenght == 0
            ? <Ani />
            : personajes.map( p => (
                <Cardcharacters 
                id= {p.id}
                nombre = {p.nombre} 
                img = {p.img}
                birthdate = {p.birthdate}
                description  = {p.description}
                />
            ))
            }
          
        </Containercharacters>
    )
}

export default characterscontainer
