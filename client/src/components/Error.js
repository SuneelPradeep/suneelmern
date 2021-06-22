
 import React from 'react'
 import { NavLink } from 'react-router-dom'
 import four from '../pics/fourofour.jpg'

 const Error = () => {
     return (
         <div className='errore'>
             <div id='notfound'className='notfound'>
                 <div >
                     <div>
                         <img src={four} alt='404' style={{width:'500px'}}/>
                     </div>
                     <div>
                        <h2 className='mt-3'>We are sorry, page not found !</h2>
                        <p className='mt-3'>The page you are looking for might have been removed or moved to some another page </p>
                     </div>
                     <div className="bu">
                         <NavLink to='/'><button className='btn btn-info mt-3'>Back to Homepage</button></NavLink>
                     </div>
                 </div>
             </div>
         </div>
     )
 }
 
 export default Error
 