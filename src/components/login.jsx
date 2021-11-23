import React,{useState} from "react";
import {auth} from '../firebaseConfig';
import {useHistory} from 'react-router-dom'

const Login = ()=> {
    const historial = useHistory()
   const  [email,setEmail]=useState('');
   const  [contraseña,setContraseña]=useState('');
   const [msgerror, setMsgError] = useState(null);

   const RegistrarUsuario = (evento)=>{
        evento.preventDefault();
           auth.createUserWithEmailAndPassword(email,contraseña)
            .then(resultado => {
                // console.log o alert
                historial.push('/')
            })
            .catch(evento => {
                //"auth/invalid-email",,,,capturados desde la consola
                //"auth/weak-password"
                // console.log(evento.code)
                if (evento.code=='auth/invalid-email'){
                    setMsgError('Formato de Email Incorrecto')
                    return
                }
                if (evento.code=='auth/weak-password'){
                    setMsgError('La Contraseña debe tener seis (06) caracteres o mas')
                    return
                }
                });
   };
   const LoginUsuario = ()=> {
        auth.signInWithEmailAndPassword(email,contraseña)
        .then((respuesta)=> {
            historial.push('/')
            // console.log o alert
        })      // en caso positivo
        .catch((error)=> { // en caso negativo
        //"auth/wrong-password"
        //console.log(error.code)
            if (error.code == "auth/wrong-password"){
                    setMsgError('Contraseña Incorrecta')
                    return
            }

           if (error.code == 'auth/user-not-found'){
                    setMsgError('No estas Registrado')
                    return
           }
        })
        setMsgError('')
   }
    return ( 
        <div className='row mt-5'>
            <div className='col'> </div>
            <div className='col'>
                <form onSubmit= {RegistrarUsuario} className='form-group'>
                    <input
                    onChange ={(evento)=>{setEmail(evento.target.value)}}
                    className='form-control'
                    placeholder='Introduce el Email'
                    type="email" 
                    />
                     <input
                     onChange ={(evento)=>{setContraseña(evento.target.value)}}
                    className='form-control mt-4'
                     placeholder='Introduce la Contraseña'
                     type="password" 
                    />
                    <input
                    className='btn btn-dark btn-block mt-4'
                    value='Registrar Usuario'
                     type="submit" 
                     />
                </form>
                <button 
                    onClick={LoginUsuario}
                    className='btn btn-success btn-block mt-4'>
                        Iniciar Sesion
                </button>
                {
                    msgerror !== null ?
                    (
                        <div className='btn btn-danger btn-block mt-4'> 
                            {msgerror}
                        </div>
                    )
                    :
                    (
                        <span className='btn btn-danger btn-block mt-4'>
                        {msgerror}
                        </span>
                    )
                }
             </div>  
            <div className='col'> </div>
        </div>

    )
}

export default Login;