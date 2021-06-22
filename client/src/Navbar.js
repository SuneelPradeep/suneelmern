import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import mern from './pics/mern.jpg'
import { UserContext } from './App'


const Navbar = () => {

  const { state, dispatch } = useContext(UserContext)

  const RenderMenu = ()=>{   
       if(state){
         return(
         <React.Fragment>      
        <li className="nav-item mx-1">
        <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
      </li>
      <li className="nav-item mx-1">
        <NavLink className="nav-link" to='/about'>About</NavLink>
      </li>
      <li className="nav-item mx-1">
        <NavLink className="nav-link" to='/contact'>Contact</NavLink>
      </li>
      <li className="nav-item mx-1">
        <NavLink className="nav-link" to='/logout'>Logout</NavLink>
      </li>
      </React.Fragment>
         )
       }
       else{
        return(
          <React.Fragment>      
         <li className="nav-item mx-1">
         <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
       </li>
       <li className="nav-item mx-1">
         <NavLink className="nav-link" to='/about'>About</NavLink>
       </li>
       <li className="nav-item mx-1">
         <NavLink className="nav-link" to='/contact'>Contact</NavLink>
       </li>
       <li className="nav-item mx-1">
         <NavLink className="nav-link" to='/login'>Login</NavLink>
       </li>
       <li className="nav-item mx-1">
         <NavLink className="nav-link" to='/signup'>Register</NavLink>
       </li>
      
       </React.Fragment>
          )
       }
  }

    return (
        <div className='navee'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/'><img src={mern} alt="mern" className='img-fluid' style={{width:'105px'}}/> </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav " style={{marginLeft:'auto'}}>
       
       <RenderMenu /> 
       
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
