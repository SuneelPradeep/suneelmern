import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import React from 'react'
import Navbar from "./Navbar";
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom'
import Error from "./components/Error";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Logout from "./components/Logout";
import {initialState, reducer} from './reducer/UseReducer'
import { createContext ,useReducer} from "react";

// creating ContextAPI

export const UserContext = createContext()
const Routing = ()=>{
  return(
    <BrowserRouter>
    <Navbar />
      <Switch>          
        <Route exact path='/' component={Home} />
        <Route  path='/contact' component={Contact} />
        <Route  path='/signup' component={Register} />
        <Route  path='/login' component={Login} />
        <Route  path='/about' component={About} />
        <Route path='/logout' component={Logout} />
        <Route path='/error' component={Error} />            
        <Redirect to='/error' />
      </Switch>
    </BrowserRouter>
  )
}


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
          <UserContext.Provider value={{ state, dispatch }}>
            
            <Routing />
         </UserContext.Provider>
    </div>
  );
}

export default App;
