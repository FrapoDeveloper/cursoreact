import Notfound from "../../../assets/notfound.json";
import React, { Component } from "react";
import Lottie from "react-lottie";
import '../../../styles/styles.css'
import {Link } from 'react-router-dom';
import {
  ContainerNotfound,
  Animationlottie,
  Buttomgradient,
  Gohouse,
} from './notfound'


class notfound extends Component {
  render() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Notfound,
      };

  return (
        <ContainerNotfound>
              <h1>Pagina no encontrada</h1>
              <Animationlottie>
                      <Lottie options={defaultOptions} />
              </Animationlottie>
                <Gohouse>
                      <h3>Volver a casa: </h3>
                      <Link to="/home" className="textrouternf">

                      <Buttomgradient>
                          Aqui
       
                     </Buttomgradient>
                     </Link>
                
                </Gohouse>
        </ContainerNotfound>
    );
  }
}

export default notfound;