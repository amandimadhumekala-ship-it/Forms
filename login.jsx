import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

  
function App() {

  
    const [action,setAction] = useState("Sign Up");

    const [values,setValue] = useState({
        email:'',
        password:'',
  })

    const handleChanges = (e) => {
    e.setValue({...values,[e.target.name]:[e.target.value]})
  }

  return (
    
      <div className="container">

        <h1>Login</h1>
        

        
        <div className='inputs'> 

         <div className='input'>
         <input type="email" placeholder='Enter Email'onChange={(e)=> handleChanges(e)}required/>
         </div>

         <div className='input'>
         <input type="password" placeholder='Enter Password'onChange={(e)=> handleChanges(e)}required/>
         </div>

        </div>

          {action==="Sign Up"?<div></div>:<div className='forgot-password'>Lost Password?<span> Click Here!</span></div>}          
          
          <div className='submit-container'>
          
            

            
          <div className={action==="Login"?"submit":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
          
          
            
          </div>
        
        

        </div>

        
        

        

    
  );
}

export default App;


