import React ,{useState, useEffect} from 'react'
import phone from '../pics/phone.jpg'
import mail from '../pics/mail.png'
import address from '../pics/address.png'
import { useHistory } from 'react-router-dom'


const Contact = () => {
    const history = useHistory()
    const [userdata, setuserdata] = useState({
        name:'',
        email:'',
        mobile:'',
        message:''
    }) 

    const callContact = async () =>{    
       try{
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },               
                 })  
                const data = await res.json();
                console.log(data)
                setuserdata({...userdata, name:data.name, email:data.email, mobile:data.mobile})
   
                if(!res.status === 200){
                    const error = new Error(res.error)
                    throw error;
                }                                                                           
          }
          catch(err){
                console.log(err)
                history.push('/login')        
                }
    }  

     useEffect(() => {   
       callContact()
     }, [])

    // storing data in contact us form 

 const handleInputs = (e)=>{
   
    const name = e.target.name;
    const value = e.target.value 

    setuserdata({...userdata, [name]:value })

 }
  // Submitting the new data to backend

 const SubmitNewData = async (e)=>{
     e.preventDefault()
    const {name, email, mobile, message} = userdata
    const res= await fetch('/contact', {
        method:"POST",
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify({ name , email, mobile, message })
    })

    const data = await res.json()
    if(!data ){
        console.log('Message not sent');
    }
    else{
        alert('Message Delivered Successfully !!!')
        setuserdata({...userdata, message:''})
    }
 }

    return (
        <div className='kee'>
           <div className="container-fluid koo">
               <div className="row">
                   <div className="col-lg-10 col-md-10 col-10 mx-auto datas" style={{display:'inline-flex'}}>
                              <div className='d-flex justify-content-start text-center mx-5 heroe'>
                                  <img src={phone} alt="hi" className='img-fluid' style={{width:'90px'}}/>
                              <div className='mx-3 mt-3'>
                                  Phone Number
                                  <div className='my-2'>
                                  8332942540
                              </div>
                              </div></div>
                              <div className='d-flex justify-content-start text-center mx-5 heroe'>
                                  <img src={mail} alt='s' className='img-thumbnail' style={{width:'90px'}}/>
                              <div className='mx-2 mt-3'>
                                  Email
                                  <div className='my-2'>
                                  suneelpradeeptheone@gmail.com
                              </div>
                              </div></div>
                              <div className='d-flex justify-content-start text-center mx-5 heroe'>
                                  <img src={address} alt="hi" className='img-fluid' style={{width:'75px'}}/>
                              <div className='mx-2 mt-3'>
                                  Address
                                  <div className='my-2'>
                                  Vizag, AP, India.
                              </div>
                              </div></div>
                   </div>

               </div>
           </div>
           <div className="container contact2 heroe" >
               <div className="row">
                   <div className="col-lg-4 col-md-4 col-10 mx-auto">
                       <div className="contact-form">
                                <h3 className='my-3'> Get in touch</h3>
                                <hr className='w-50'/>
                                <form className='mt-3' method='POST' style={{width:'600px'}}>
                                    <div className="d-flex justify-content-between align-items-center mx-auto">
                                <input type='text' value={userdata.name}  name='name' onChange={handleInputs}  placeholder='your name' required='true' className='form-control mx-2 ' style={{width:'150px'}} />
                                <input type='email' value={userdata.email} name='email' onChange={handleInputs} placeholder='your email' required='true' className='form-control mx-2' style={{width:'500px'}}/>
                                <input type='number' value={userdata.mobile} name='mobile' onChange={handleInputs}  placeholder='mobile no.' required='true' className='form-control mx-2 ' style={{width:'140px'}}/>
                                    </div>
                                    <div className='form-floating mt-3'>
                                    <textarea value={userdata.message} onChange={handleInputs} name='message'  placeholder='Write your message' className='form-control' style={{height:'220px'}} />
                                    </div>
                                    <button type="submit" onClick={SubmitNewData} className="btn btn-primary btn-small mt-2 mb-4 justify-content-start"> Submit </button>
                                </form>
                       </div>
                   </div>
               </div>
           </div>
        </div>
      );
}
 
export default Contact;
