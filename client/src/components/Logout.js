
 import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../App'
 

 const Logout = () => {
      const { state, dispatch } = useContext(UserContext)
    const history = useHistory()
    useEffect(()=>{

        fetch('/logout', {
            method: "GET",
            headers: {"Content-Type" : "application/json" },     
        
        }).then((res)=>{
                 dispatch({ type: "USER" , payload: false })
                 history.push('/login', { replace: true })
                 if(res.status !== 200){
                     throw new Error('Not logged out')
                 }
        }).catch((err)=>{
            console.log(err);
        })
    })
     return (
         <div>
               <h1> Logged out </h1>
         </div>
     )
 }
 
 export default Logout
 