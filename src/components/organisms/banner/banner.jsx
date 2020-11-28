import React from "react";
import "../../../styles/styles.css"
import { Link } from "react-router-dom";
import{
  Containerbanner,
  Infobanner,
  Titlebanner,
  Questionbanner,
  Buttonbanner,
  Buttonleft,
  Buttonright,
  Imagebanner,
  Textbanner

} from './banner.js'
const Banner = () => (

    <Containerbanner>
      <Infobanner>
            <Titlebanner >
                Ataque a los titanes <br/>
                <Questionbanner>¿Que personaje buscas?</Questionbanner>
            </Titlebanner>
            <Textbanner>
              Esta página te ayudará a conocer  a tus personajes favoritos de <br />
              Shingeki no kyojin, además te enterarás de las curiosidades que 
              no sabías.
            </Textbanner>
            <Buttonbanner>
              <Link to="/personajes" className="textrouternf">
             < Buttonleft>Personajes</Buttonleft>
              </Link>
              <Link to="/curiosidades"  className="textrouternf">
                <Buttonright>Secretos</Buttonright>
              </Link>
            </Buttonbanner>
      </Infobanner>


          <Imagebanner>
            <img
              src="https://i.pinimg.com/564x/96/9f/5a/969f5addb67c45bd98dad70da37a0ede.jpg"
              alt="Cuerpo de exploracion"
            />
          </Imagebanner>
 
    </Containerbanner>

);

export default Banner;