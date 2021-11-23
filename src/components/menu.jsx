import React,{useEffect,useState} from "react";
import {Link,useHistory} from 'react-router-dom'
import {auth} from  '../firebaseConfig'


const Menu = ()=> {
    const historial = useHistory()
    const [usuario,setUsuario]=useState(null)

    useEffect(()=>{
        auth.onAuthStateChanged((uso)=>{
            if (uso){
                setUsuario(uso.email)
                alert(uso)
            }else{
                console.log(uso.email)
            }
        })
    },[]) // [] para que no genere un loop infinito,tratando de comprobar si existe o no existe

    const CerrarSesion = ()=>{
        auth.signOut() // para cerrar la sesion
        setUsuario(null) // luego se setea el usuario en null
        historial.push('/') //luego se empuja o redirecciona  hacia donde se necesite,en este caso a INICIO
    }

    return ( 
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'> 
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/'>Inicio</Link>
                    </li>

                   

                    <li>
                         {/*<Link className='nav-link' to='/admin'>Admin</Link>*/}
                         {
                            !usuario ?
                            (
                                <Link className='nav-link' to='/admin'>Admin</Link>
                            )
                            :
                            (
                                <span></span>
                            )
                        } 
                    </li>

                    <li> 
                        {/*<Link className='nav-link' to='/login'>Login</Link>*/}
                        {
                            !usuario ?
                            (
                                <Link className='header' to='/login'>Login</Link>
                            )
                            :
                            (
                                <span></span>
                            )
                        } 
                    </li>
                </ul>
                {
                    usuario ?
                    (
                        <button 
                        onClick={CerrarSesion}
                        className='btn btn-danger float-end  btn-sm'>
                            Cerrar Sesion
                        </button>
                    )
                    :
                    (
                        <span></span>
                    )
                }
           </nav>
        </div>

    )
}

export default Menu;