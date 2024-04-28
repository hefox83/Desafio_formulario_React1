import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react"

function Formulario({setAlert}){
    const [user,setUser] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirm,setConfirm] = useState("")
    function handleSubmit(e)
    {e.preventDefault() 
     if (user === "" || email===""||password===""||confirm===""){
        setAlert({mensaje:"Campos Incompletos", color: "red"})
        return
    }
    if(password!==confirm){
        setAlert({mensaje:"contraseñas distintas", color:"red"})
        setPassword("")
        setConfirm("")
        return    
    }
    else{
        setAlert({mensaje:"Inscripcion Exitosa", color:"green"})
        setUser("")
        setPassword("")
        setConfirm("")
        return
    }
    }
    return (
        <>
         <Form className='border p-2' onSubmit={handleSubmit}>
        <Form.Group className="mx-5" controlId="formBasicText">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Nombre" onChange={(e)=>setUser(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mx-5" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="tucorreo@aqui.cl"  onChange={(e)=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mx-5" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="password" placeholder="contraseña" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3 mx-5" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="password" placeholder="Confirma Contraseña" onChange={(e)=>setConfirm(e.target.value)} />
      </Form.Group>
      <Button className='p-1 mx-5' variant="success" type="submit">
        Registrarse
      </Button>
    </Form>
        </>
    )
}
export default Formulario

