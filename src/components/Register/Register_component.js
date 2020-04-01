import React,{useState} from 'react'
import Styled from 'styled-components'
const Register_component = () => {
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("some",nombre,apellido,email,gender,userName)
        fetch('http://localhost:8080/',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({query: `
            mutation CreateUser($UserID: ID, $Name: String, $Lastname: String, $Email: String, $Gender: String, $Username: String ){
                CreateUser(Id: $UserID, Name: $Name, Lastname: $Lastname, Email: $Email, Gender: $Gender, Username: $Username){
                  Name
                  Lastname
                  Id
                }
              }`,
              variables: {"UserID" : "123456", "Name": nombre, "Lastname" : apellido, "Email" : email, "Gender" : gender, "Username" : userName}})
        }).then(ans => ans.json())
        .then(ans => {
            console.log(ans);
        })

    }
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [userName, setUserName] = useState("");
    return (
        <div>
            <h1>
                Registro de usuario
            </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" onChange={(val)=>{setNombre(val.target.value)}}/>
                <input type="text" placeholder="Apellidos" onChange={(val)=>{setApellido(val.target.value)}}/>
                <input type="email" placeholder="Correo" onChange={(val)=>{setEmail(val.target.value)}}/>
                <select >
                    <option value="M" onClick={(val)=>{setGender(val.target.value)}}>M</option>
                    <option value="F"onClick={(val)=>{setGender(val.target.value)}}>F</option>
                </select>
                <input type="text" placeholder="Usuario" onChange={(val)=>{setUserName(val.target.value)}}/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Register_component
