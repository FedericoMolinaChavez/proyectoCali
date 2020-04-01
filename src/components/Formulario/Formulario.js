import React,{useState} from 'react'
import styled from 'styled-components'


const Formulario = ({className}) => {
    const [enfermedad, setEnfermedad] = useState([]);
    return (
            <form className={className}>
                <label>
                    Edad:
                    <input type="text" placeholder="Edad" />
                </label>
                <label>
                    Numero de celular: 
                    <input type="text" placeholder="Celular" />
                </label>
                <label>
                    ¿Con cuantas personas vives en tu casa actualmente (sin incluirte)?
                    <input type="text" placeholder="algo" />
                </label>
                <label>
                    ¿Tiene Mascotas?
                    <input type="text" placeholder="algo" />
                </label>
                <label>
                    Registra si tienes alguna enfermedad
                    <select multiple={true} value={enfermedad}>
                            <option value="Asma" onClick = {(e) => {setEnfermedad([...enfermedad.filter((ind) =>{
                                if(ind !== e.target.value){
                                    return ind;
                                }
                            }),e.target.value])}}>Asma</option>
                            <option value="EPOC" onClick = {(e) => {setEnfermedad([...enfermedad.filter((ind) =>{
                                if(ind !== e.target.value){
                                    return ind;
                                }
                            }),e.target.value])}}>EPOC</option>
                            <option value="Enfisema Pulmonar" onClick = {(e) => {setEnfermedad([...enfermedad.filter((ind) =>{
                                if(ind !== e.target.value){
                                    return ind;
                                }
                            }),e.target.value])}}>Enfisema Pulmonar</option>
                            <option value="Tuberculosis" onClick = {(e) => {setEnfermedad([...enfermedad.filter((ind) =>{
                                if(ind !== e.target.value){
                                    return ind;
                                }
                            }),e.target.value])}}>Tuberculosis</option>
                            <option value="Diabetes Mellitus" onClick = {(e) => {setEnfermedad([...enfermedad.filter((ind) =>{
                                if(ind !== e.target.value){
                                    return ind;
                                }
                            }),e.target.value])}}>Diabetes Mellitus</option>
                            <option value="VIH" onClick = {(e) => {setEnfermedad([...enfermedad.filter((ind) =>{
                                if(ind !== e.target.value){
                                    return ind;
                                }
                            }),e.target.value])}}>VIH</option>
                            <option value="Enfermedad del Corazón" onClick = {(e) => {setEnfermedad([...enfermedad.filter((ind) =>{
                                if(ind !== e.target.value){
                                    return ind;
                                }
                            }),e.target.value])}}>Enfermedad del Corazón</option>
                            <option value="Cáncer" onClick = {(e) => {setEnfermedad([...enfermedad.filter((ind) =>{
                                if(ind !== e.target.value){
                                    return ind;
                                }
                            }),e.target.value])}}>Cáncer</option>
                            <option value="Desnutrición" onClick = {(e) => {setEnfermedad([...enfermedad.filter((ind) =>{
                                if(ind !== e.target.value){
                                    return ind;
                                }
                            }),e.target.value])}}>Desnutrición</option>
                            <option value="Obesidad" onClick = {(e) => {setEnfermedad([...enfermedad.filter((ind) =>{
                                if(ind !== e.target.value){
                                    return ind;
                                }
                            }),e.target.value])}}>Obesidad</option>
                            <option value="Enfermedad Renal Crónica" onClick = {(e) => {setEnfermedad([...enfermedad.filter((ind) =>{
                                if(ind !== e.target.value){
                                    return ind;
                                }
                            }),e.target.value])}}>Enfermedad Renal Crónica</option>
                            <option value="Hipertensión arterial" onClick = {(e) => {setEnfermedad([...enfermedad.filter((ind) =>{
                                if(ind !== e.target.value){
                                    return ind;
                                }
                            }),e.target.value])}}>Hipertensión arterial</option>
                            <option value="Enfermedad crónica del hígado" onClick = {(e) => {setEnfermedad([...enfermedad.filter((ind) =>{
                                if(ind !== e.target.value){
                                    return ind;
                                }
                            }),e.target.value])}}>Enfermedad crónica del hígado</option>
                            <option value="Enfermedad Neurológica o del neurodesarrollo" onClick = {(e) => {setEnfermedad([...enfermedad.filter((ind) =>{
                                if(ind !== e.target.value){
                                    return ind;
                                }
                            }),e.target.value])}}>Enfermedad Neurológica o del neurodesarrollo</option>
                            <option value="Fumador actual" onClick = {(e) => {setEnfermedad([...enfermedad.filter((ind) =>{
                                if(ind !== e.target.value){
                                    return ind;
                                }
                            }),e.target.value])}}>Fumador actual</option>
                            <option value="Ex fumador" onClick = {(e) => {setEnfermedad([...enfermedad.filter((ind) =>{
                                if(ind !== e.target.value){
                                    return ind;
                                }
                            }),e.target.value])}}>Ex fumador</option>
                            <option value="Ninguna" onClick = {(e) => {setEnfermedad([...enfermedad.filter((ind) =>{
                                if(ind !== e.target.value){
                                    return ind;
                                }
                            }),e.target.value])}}>Ninguna</option>
                            <option value="Otra..." onClick = {(e) => {setEnfermedad([...enfermedad.filter((ind) =>{
                                if(ind !== e.target.value){
                                    return ind;
                                }
                            }),e.target.value])}}>Otra...</option>
                    </select>
                </label>
                <input type="submit" placeholder="algo" />
            </form>
        
    )
}

export default styled(Formulario)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
label {
    display: flex;
    flex-direction: column;
    justify-content: space-between

}
`
