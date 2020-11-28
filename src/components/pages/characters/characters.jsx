import React, { useState,useEffect } from 'react'
import Containercharacters from '../../templates/characterscontainer/containercharacters'
import Axios from 'axios'
import '../../../styles/styles.css'
const Characters = () => {
    const [personajes,setPersonaje] = useState([])
    useEffect(()=>{
      Axios.get("https://my-json-server.typicode.com/FrapoDeveloper/json-db/personajes")
        .then(response => {
            setPersonaje(response.data)
        })
    })
    return (
        <>       
        <div className="toppage">
            {     personajes.lenght === 0 
        ? <h1 className="toppage">KNSKFDKGDFKGKLDSMFSDLMFKSDMFKMSDFMSDKLFMSDKFMKSDMFKLSDFK</h1>
        :  <Containercharacters personajes={personajes} />

        }
           
        </div>
        </>
    )

}

export default Characters