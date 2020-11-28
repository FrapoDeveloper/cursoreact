import styled from 'styled-components'
import Kanit from '../../../fonts/Kanit-bold.ttf'
import Kanitalic from '../../../fonts/Kanit-regular.ttf'

export const Containerbanner = styled.div`
    @font-face {
        font-family: Kanitbold;
        font-style: bold;
        src: url(${Kanit});
    }
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   font-family: 'Mukta', sans-serif;
   margin-top: 5em;
   box-sizing: unset;
   padding: 3em;
   background: 	#22303a;
    @media (max-width: 768px) {
        display: block;
        margin: 2em 0em;
        text-align:center;
    }
`
export const Titlebanner = styled.h1`
      text-shadow: 0.2px 0.5px 0.2px white;
      font-weight:bold;
`


export const Containerbuttom = styled.p`
    cursor: pointer;
     transform-style: none;
     text-decoration: none;
     outline-style: none;
     margin: 13em 0em;
`
export const Infobanner = styled.div`
   @font-face {
        font-family: Kanitalic;
        font-style: bold;
        src: url(${Kanitalic});
    }
   padding: 1em;
   font-family: Kanitalic;
   text-align: left;
   margin: 0 1em;
   @media only screen and (max-width: 800px) {
    
    padding: 1em;
    text-align: center;
    margin: 0 1em;
    
   }
`
export const Buttonleft = styled.div`
    padding: 0.4em 1em;
   border-radius: 4px;
    background:  #9b7a56;
    &:hover{
     text-decoration: none;
     background:  #b09a6b;
  }
`

export const Buttonright = styled.div`
    padding: 0.4em 1em;
   border-radius: 4px;
   margin-left: 1em;
    border: 1px solid #9b7a56;
    color: white;
    &:hover{
     text-decoration: none;
     background:  #9b7a56;
  }
`
export const Questionbanner = styled.div`
     margin-top:-10px;
    color: #9b7a56;
    text-shadow: 0.2px 0.5px 0.2px white;
`
export const Textbanner = styled.div`
     font-style:italic;

`
export const Buttonbanner = styled.div`
     text-decoration: none;
     display: flex;
     margin-top:2em;
     flex-direction: row;
     @media only screen and (max-width: 800px) {
   
      justify-content: center;
   }
`
export const Question = styled.div`
 @media only screen and (max-width: 800px) {
   display: flex;
      align-items: center;
      justify-content: center;
      margin: 0.3em;
      &:img{
      width:100%;
      max-width:640px;;
   }
 }
`
export const Imagebanner = styled.div`
   @media only screen and (max-width: 800px) {
    display: flex;
      align-items: center;
      justify-content: center;
      margin: 0.3em;
      &>img{
        width:100%;
      max-width:640px;;
      }
      }

`
