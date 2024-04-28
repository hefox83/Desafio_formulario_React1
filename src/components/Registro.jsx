import Formulario from "./Formulario"
import { useState } from "react"
import SocialButton from "./SocialButton"
import Alert from "./Alert"


function Registro() {
    const [alert, setAlert] = useState({ mensaje: "", color: "" })
    return (
        <>
            <div className="containerAll">

                <div className="container">
                    <div className="mb-5 formIngresoDiv">
                        <h1 style={{color:"black"}}className="cabecera" >Crea una Cuenta</h1>
                        <div style={{ display: "flex", justifyContent: "space-around" }} className='socialbutton'>
                            <SocialButton facebook="fa-brands fa-facebook" />
                            <SocialButton instagram="fa-brands fa-instagram" />
                            <SocialButton linkedin="fa-brands fa-linkedin" />
                        </div>
                    </div>
                </div>
                <h3 style={{color:"black"}}>Completa el Formulario</h3>
                <Formulario setAlert={setAlert} />
                {
                    alert.mensaje && <p style={{ color: alert.color }}>{alert.mensaje}</p>
                }
            </div>
        </>
    )
}
export default Registro