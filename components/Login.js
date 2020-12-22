import React, {useState} from 'react';
import Principal from './Principal'



const Login = () => {

    const [datos, setDatos]= useState({
        usuario: '',
        password:''
     
    })
    const [isLogin, setIsLogin] = useState(false)
    const [error, setError]= useState(false)

    const InputDatos = (event)=>{
       // console.log(event.target.value)
        setDatos({
           ...datos,
            [event.target.name] :  event.target.value
            
        })
    }

    const IngresarLogin = ()=>{
        let usuario = datos.usuario
        let password= datos.password
        if (usuario === "chucknorris" && password=== "123123"){
            //alert("registro existoso")
           setIsLogin(true)
           setError(false)
        }else{
            setIsLogin(false)
            setError(true)
        }
    }






    return ( 
        <div className="container">
            { isLogin ? <Principal/>:
            
            <div className="abs-center">
                <form className="border p-3 form">
                    <div className="form-group">
                        <label >Usuario</label>
                        <input
                         className="form-control"
                         type="text" 
                         name="usuario"
                         id="usuario"
                         placeholder="Ingrese Usuario"
                         onChange={InputDatos} />
                    </div>

                    <div className="form-group">
                        <label >password</label>
                        <input 
                        className="form-control"
                        type="password" 
                        name="password"
                        id="password"
                        placeholder="Ingrese Password"
                        onChange={InputDatos} />
                    </div>

                    {error &&
                    <div class="alert alert-danger" role="alert">
                         Los Datos Ingresados son Incorrectos
                    </div>
                    }

                    <div className="form-group">
                        <button 
                        className="btn btn-primary"
                        type="submit"
                        onClick={(e)=>{
                        e.preventDefault();

                        IngresarLogin()
                        }}> Entrar 
                        </button>
            </div>
                </form>
            </div>
            }
                
            
        </div>
       
    
 
     );
}
 
export default Login;