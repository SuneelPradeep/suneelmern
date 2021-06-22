import React, {useEffect, useState} from 'react'

 const Home = () => {

    const [userdata, setuserdata] = useState('') 
    const [show, setshow] = useState(false)

    const callHome = async () =>{    
       try{
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },               
                 })  
                const data = await res.json();
                console.log(data)
                setuserdata(data.name)
                setshow(true)
   
                if(!res.status === 200){
                    const error = new Error(res.error)
                    throw error;
                }                                                                           
          }
          catch(err){
                console.log(err)              
                }
    }  

     useEffect(() => {   
       callHome()
     }, [])
     return (
         <div className='abc'>
         <div className='home'>
             <p style={{fontSize:'1.5rem', color:'#2832c2'}}> WELCOME </p>
             <h1 className='font-weight-bold mb-2' style={{fontSize:'6.5rem'}}>{userdata}</h1>
            <h1 className='font-weight-bold mt-3' style={{fontSize:'2.8rem'}}> {show ? 'Happy to see you back ' : 'We are the MERN Developers' } </h1>
            
         </div>
         </div>
       );
 }
  
 export default Home;