import React from 'react'

const Formulario = () => {
    return (
        <div>
            <form>
                <label>
                    Nombres y apellidos:
                    <input type="text" placeholder="Nombres y apellidos" />
                </label>
                <label>
                    Edad:
                    <input type="text" placeholder="Edad" />
                </label>
                <label>
                    Sexo:
                        <select>
                            <option value="M">M</option>
                            <option value="F">F</option>
                        </select>
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
                    <select multiple={true} value={[]}>
                            <option value="Asma">Asma</option>
                            <option value="EPOC">EPOC</option>
                            <option value="Enfisema Pulmonar">Enfisema Pulmonar</option>
                            <option value="Tuberculosis">Tuberculosis</option>
                            <option value="Diabetes Mellitus">Diabetes Mellitus</option>
                            <option value="VIH">VIH</option>
                            <option value="Enfermedad del Corazón">Enfermedad del Corazón</option>
                            <option value="Cáncer">Cáncer</option>
                            <option value="Desnutrición">Desnutrición</option>
                            <option value="Obesidad">Obesidad</option>
                            <option value="Enfermedad Renal Crónica">Enfermedad Renal Crónica</option>
                            <option value="Hipertensión arterial">Hipertensión arterial</option>
                            <option value="Enfermedad crónica del hígado">Enfermedad crónica del hígado</option>
                            <option value="Enfermedad Neurológica o del neurodesarrollo">Enfermedad Neurológica o del neurodesarrollo</option>
                            <option value="Fumador actual">Fumador actual</option>
                            <option value="Ex fumador">Ex fumador</option>
                            <option value="Ninguna">Ninguna</option>
                            <option value="Otra...">Otra...</option>
                    </select>
                </label>
                <input type="submit" placeholder="algo" />
            </form>
        </div>
    )
}

export default Formulario
