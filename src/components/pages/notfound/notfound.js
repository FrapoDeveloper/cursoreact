import styled from 'styled-components'
import Kanit from '../../../fonts/Kanit-bold.ttf'
export const ContainerNotfound = styled.div`
    @font-face {
        font-family: Kanitbold;
        font-style: bold;
        src: url(${Kanit});
    }
    margin-top:4em;
    display: flex;
    color: #22303a;
    text-align:center;
    align-items:center;
    justify-content: center;
    font-family: Kanitbold;
    flex-direction:column;
    height: 80vh;
    @media (max-width: 768px) {
        justify: center;
       font-size: 13px;
    }
`

export const Animationlottie = styled.div`
    width: 40em;
    height: 20em;
    @media (max-width: 768px) {
        width: 20em;
    height: 10em;

    }
`
export const Gohouse = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:row;

`
export const Buttomgradient = styled.button`

   background-image: linear-gradient(to right,
   #1A2980 0%, #26D0CE  51%, #1A2980  100%);
   margin: 1.5em 1em;
   width: 8em;
   padding: 3px;
   height: 30px;
   font-weight:bold;
   cursor:pointer;
   font-family: sans-serif;
   text-align: center;
   text-transform: uppercase;
   transition: 0.5s;
   background-size: 200% auto;
   color: #fff;         
    border:none;
   border-radius: 25px;
   display: block;
   &:hover  {
   background-position: right center; 
   color: #fff;
   text-decoration: none;
   }

   @media (max-width: 768px) {
    justify: center;
    font-size: 13px;
    width: 7em;
    padding: 3px;
    height: 25px;
    }
    `