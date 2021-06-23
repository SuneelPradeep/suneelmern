import React, { useContext } from 'react'

import login from '../pics/login.jpg'
import { NavLink, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from '../App';

const Login = () => {
    // for clicking login logout button
    const { state, dispatch } = useContext(UserContext)

    const history = useHistory()
    const [data, setdata] = useState({
        email:'',
        password:''
    })
      let name, value;
     const handleLogin =(e)=>{
           name= e.target.name
           value=e.target.value

           setdata({...data, [name]: value})
     }

    const PostLogin = async (e)=>{
        e.preventDefault()
        const { email, password}  = data
        const res= await fetch("/signin", {
            method: "POST",
            headers:{"Content-Type" : "application/json "},
            body: JSON.stringify({ email, password})
        })
        const datas = await res.json()
        if(!datas || res.status === 400){
                 window.alert('Invalid Credentials')
                 console.log('Login Failed')
        }
        else{
            dispatch({ type: "USER", payload : true })
            window.alert('Login success')
                 console.log('Login success')
              history.push('/')
        }
    }

    return (
        <div className='contee'>
        <div className='container conta'>
            <div className="row">
            <div className='col-lg-5 col-md-5 col-8 mx-auto mt-5 my-auto'>
            <figure>
                         <img src={login} alt="l" className='img-fluid mt-3' style={{width:'350px'}}/>
                         </figure>
                         <NavLink to='/signup' style={{textDecoration: 'none'}}><h6 > New here?  Create an Account</h6></NavLink>
                         
                     </div> 
                     <div className='col-lg-4 col-md-4 col-8 my-auto goku mx-auto '>
                         <h2 className='mb-3'>Login</h2>       
                 <div className='mb-2 '>
                     <input type="email" placeholder='your email' className="form-control w-50"
                       aria-describedby="emailHelp" value={data.email} name='email' onChange={handleLogin} />
                     </div>
                     <div className='mb-2'>
                        
                        <input type="password"  placeholder='your password' className="form-control w-50"
                        value={data.password} name='password' onChange={handleLogin}  />
                    </div>
                
                 <button type="submit" className="btn btn-primary btn-small mt-2" onClick={PostLogin}> Let's Go </button>
                
             
                     </div>  
                     </div>
        </div>
     </div>
      );
}
 
export default Login;
