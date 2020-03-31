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
}
button{
    width: 35%;
    align-self: center;
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


