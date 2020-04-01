import React,{useState} from 'react'
import Styled from 'styled-components'
import {FaFacebook} from 'react-icons/fa'
import Anilink from 'gatsby-plugin-transition-link/AniLink'

const login = (user, password) => {
    
}

const Login = ({className}) => {

    return (
        <section className={className}>
            <div>
            <input value="Usuario"/>
            <input value="Contraseña"/>
            <Anilink fade to='/formulario'>Entrar</Anilink>
            <button className="facebookBut"><FaFacebook/></button>
            <Anilink fade to='/Register'>Entrar</Anilink>
            </div>
            
        </section>
    )
}

export default Styled(Login) `

display: flex;
height: 400px;
width: 100%;
flex-direction: row;
justify-content: center;
div{
    background-color:#202060; 
    padding: 15px;
    border: solid;
    border-color grey;
    border-radius: 10px;
    width:65%;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70%;
    -webkit-box-shadow: 13px 9px 5px 0px rgba(65,63,87,0.47);
    -moz-box-shadow: 13px 9px 5px 0px rgba(65,63,87,0.47);
    box-shadow: 13px 9px 5px 0px rgba(65,63,87,0.47);
    }
input{
    border-radius: 10px;
    border: 2;
    width: 90%;
    align-self: center;
    background-color:#602080;
    color: white;
}
button{
    width: 35%;
    align-self: center;
    background-color:#b030b0;
}
a{
    width: 35%;
    align-self: center;
    text-decoration: none;
    text-align: center;
    background-color:#b030b0;
}
facebookBut{
        backgroud-color: white;
    }
@media (max-width: 700px){
    button{
        width:90%;
    }
}
`


