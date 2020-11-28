import styled from 'styled-components'
import Kanit from '../../../fonts/Kanit-regular.ttf'
export const Containerheader = styled.div`
     @font-face {
        font-family: Kanititalic;
        font-style: italic;
        src: url(${Kanit});
    }
    width: 100vw;
    z-index:100;
    top: 0; left: 0; right: 0;
    font-family: Kanititalic;
    display: flex;
    justify-content:space-between;
    align-items: center;
    background: #fbfbfe;
    box-shadow: 1px 1px 1px gray;
    position:fixed;
    background: rgba(231, 231, 231, 0.979);
    @media only screen and (max-width: 800px) {
      font-size: 15px;
    }
`

export const Listitem = styled.ol` 
    list-style: none;  
    font-size: 18px;
    cursor: pointer;
    padding: 0em 1em;
    transform-style: none;
    text-decoration: none;
    color: #22303aee;
    font-weight: bold;
    outline-style: none;
    &:hover {
    color: #22303aee;
    color: #58b3f3;
    text-decoration: none;
    }
    @media only screen and (max-width: 800px) {
        font-size: 16px;
        padding: 0em 0.7em;
    }
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        padding: 0em 0.5em;
    }


`

export const Menunav = styled.div` 
    display: flex;
    margin-right:5em;
    flex-direction: row;
    @media only screen and (max-width: 800px) {
        margin-right:3em;
    }

    @media only screen and (max-width: 600px) {
        margin-right:1em;

    }
`

export const Logo = styled.img` 
    width:140px;
    height: 50px;
    cursor:pointer;
    padding: 0.5em 0em;
    margin-left:3em;

    @media only screen and (max-width: 800px) {
        margin-left:2em;
    width:110px;
    height: 35px;
    }

    @media only screen and (max-width: 600px) {
        margin-left:1em;
    width:70px;
    height: 20px;
    }
    
`