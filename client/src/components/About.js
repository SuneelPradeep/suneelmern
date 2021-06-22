import React from 'react'
import me from '../pics/me.jpg'
import {useHistory} from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import about from '../pics/about.jpg'
import abhi from '../pics/Abhi.jpg'
const About = () => {

 const history = useHistory()
 const [userdata, setuserdata] = useState({})

 const callAbout = async () =>{
       
    try{
         const res = await fetch('/about', {
             method: "GET",
             headers: {
                 Accept: "application/json",
                 "Content-Type": "application/json",
             },
                 credentials : "include"
              }) 

             const data = await res.json();
             console.log(data)
             setuserdata(data)

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
    callAbout()
  }, [])

    return (
        <div className='aboute mx-auto'>
           <div className="container bg-gray abouta">
               <form method='GET'>
                   <div className="row">
                       <div className="col-md-4 col-sm-4">
                            <img src={userdata.name ==='Suneel Pradeep' ? me : about }    
                            alt="me" className='mt-3 mx-2' style={{width:'200px'}}/>
                       </div>
                       <div className="col-md-6 col-sm-6">
                            <div className="profile mt-4">
                                <h5 className='font-weight-bold'style={{fontSize:'1.8rem'}}> {userdata.name}</h5>
                                <h6 className='font-weight-bold'style={{fontSize:'1.1rem'}}>{userdata.work}</h6>
                                <p className='mt-3'> Ranking : <span> 7/10</span></p>

                                <ul className="nav nav-tabs" role='tablist'>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" 
                                    data-bs-target="#home" type="button" role="tab" 
                                    aria-controls="home" aria-selected="true" style={{textDecoration:'none', color:'#242124'}}> About </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" 
                                    data-bs-target="#profile" type="button" role="tab" aria-controls="profile" 
                                    aria-selected="false" style={{textDecoration:'none', color:'#242124'}}> Timeline</button>
                                </li>
                                    
                                    
                                    </ul>
                            </div>

                       </div>
                       <div className="col-md-2 col-sm-2">
                           {/* <h6>Edit Profile</h6> */}
                           <button type='button' className='btn btn-dark mt-3' name='btnAddMore' 
                           value='Edit Profile' 
                            style={{borderBox:'none'}}> Edit Profile</button>
                       </div>


                     <div className="col-md-4 mt-5 col-sm-4">
                              <a href='https://www.youtube.com/watch?v=bg4wzFbt8iE&ab_channel=BlightySun'
                               style={{textDecoration:'none', color:'#242124'}}> <p>Youtube </p></a>
                             <a href='https://www.instagram.com/suneel_pradeep/' 
                             style={{textDecoration:'none', color:'#242124'}}> <p>Instagram </p></a>
                             <a href='https://github.com/SuneelPradeep' 
                             style={{textDecoration:'none', color:'#242124'}}> <p> GitHub </p></a>
                             <a href='https://m.starmakerstudios.com/d/playrecording?app=sm&from_sid=62099906303&is_convert=true&recordingId=562949975154883' 
                             style={{textDecoration:'none', color:'#242124'}}> <p> Starmaker </p></a>
                             <a href='https://www.facebook.com/profile.php?id=100012861945659' 
                             style={{textDecoration:'none', color:'#242124'}}> <p> Facebook </p></a>
                     </div>

                     <div className="col-md-8 col-sm-4">
                      <div className="tab-content" id='myContentTab'>
                          <div className="tab-pane fade show active" id='home' role='tabpanel' aria-labelledby='home-tab'>
                          <div className="row mt-4">
                              <div className="col-md-6">
                                    <label> User ID</label>
                              </div>
                              <div className="col-md-6">
                                  <p> 234344243243</p>
                              </div>
                              <div className="col-md-6">
                                    <label> Name</label>
                              </div>
                              <div className="col-md-6">
                                <p> {userdata.name }</p>
                              </div>
                              <div className="col-md-6">
                                    <label> Mobile</label>
                              </div>
                              <div className="col-md-6">
                                  <p> {userdata.mobile}</p>
                              </div>
                              <div className="col-md-6">
                                    <label> Email</label>
                              </div>
                              <div className="col-md-6">
                                  <p> {userdata.email}</p>
                              </div>
                              <div className="col-md-6">
                                    <label> Work</label>
                              </div>
                              <div className="col-md-6">
                                  <p> {userdata.work}</p>
                              </div>
                              </div>

                          </div>
                          <div className="tab-pane fade" id='profile' role='tabpanel' aria-labelledby='profile-tab' >
                          <div className="row mt-4">
                              <div className="col-md-6">
                                    <label> TimeStarted</label>
                              </div>
                              <div className="col-md-6">
                                  <p> May 4th 2021 </p>
                              </div>
                              <div className="col-md-6">
                                    <label> Earnings</label>
                              </div>
                              <div className="col-md-6">
                                  <p> 6k only</p>
                              </div>
                              <div className="col-md-6">
                                    <label> Hobbies</label>
                              </div>
                              <div className="col-md-6">
                                  <p> Movies, Singing, Stock Market</p>
                              </div>
                              </div>
                              </div>
                          
                      </div>
                      </div>  
                      
                   </div>
               </form>
           </div>
        </div>
      );
}
 
export default About;