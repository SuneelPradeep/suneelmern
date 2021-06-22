import React, { useState } from 'react'
import register from '../pics/register.jpg'

import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';


const Register = () => {
   const history = useHistory()
    const [user, setuser] = useState({
        name:'',
         email:'',
        work:'',
        mobile:'',
        password:'',
        cpassword:''
    })
     let name, value;

    const handleInput =(e)=>{
       name = e.target.name
       value = e.target.value
       
       setuser({...user, [name]:value})
    }

    const Postdata = async (e)=>{
      e.preventDefault()
      console.log('hi submit clicked');
   const {name,email,mobile, work, password,cpassword} = user;

      const res = await fetch("/register", {
          method: "POST",
          headers:{ "Content-Type": "application/json"},
          body: JSON.stringify({ name, user, email, mobile,work, password, cpassword })
        })
          const data = await res.json()
          if( res.status === 400 || !data ){
               window.alert('Invalid registration failed')
               console.log('Invalid registration failed')
          }
          else{
            window.alert('registration success')
            console.log('registration success')
            history.push('/login')
          }
    }

    return (
        <div className='contee'>
           <div className='container conta'>
               <div className="row">
               <div className='col-md-6 col-lg-6 col-8 mx-auto mt-5 goku'>
                       <h2 className='mb-3 mx-5'>Sign up</h2>
                              <form method='POST' className='mx-5'>

                              
                                <div className='mb-2'>
                                
                                 
                                <input type="text" placeholder='your name' className="form-control w-50" name='name' value={user.name} onChange={handleInput} /> 
                                
                            </div>
                            <div className='mb-2'>
                            
                                
                                <input type="email" placeholder='your email' className="form-control w-50" name='email'  value={user.email} onChange={handleInput} />
                                
                            </div>
                            <div className='mb-2'>
                                
                                <input type="number" placeholder='mobile no.' className="form-control w-50" name='mobile'  value={user.mobile} onChange={handleInput} />
                                
                            </div>
                            <div className='mb-2'>
                                
                                <input type="text"  placeholder='your work' className="form-control w-50" name='work'  value={user.work} onChange={handleInput} />
                                
                            </div>
                            <div className='mb-2'>
                                
                                <input type="password"  placeholder='your password' className="form-control w-50" name='password' value={user.password} onChange={handleInput}  />
                            </div>
                            <div className='mb-2'>
                               
                                <input type="password"  placeholder='confirm password' className="form-control w-50" name='cpassword' value={user.cpassword} onChange={handleInput}  />
                            </div>
    
                            <button type="submit" class="btn btn-primary btn-small mt-2" onClick={Postdata} value='register' name='signup'> Register </button>
                           
                            </form>
                        </div> 
                        <div className='col-lg-4 col-md-4 col-8 my-auto mx-auto'>
                            <figure>
                            <img src={register} alt="r" className='img-fluid mt-5' />
                            </figure>
                            <NavLink to='/login' style={{textDecoration: 'none'}}><h6> Already registered? Let's Login!</h6></NavLink>
                        </div>  
                        </div>
                        
           </div>
        </div>
      );
}
 
export default Register;

