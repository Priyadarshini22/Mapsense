import React, { useState ,useEffect} from "react";
import axios from "axios";
import { Form, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

import { Link} from "react-router-dom";
import { Role } from "./Role";
const Login = () => {
  const [password, setPassword] = useState("");
  const [firstName,setFirstName]=useState('');
  const [secondName,setSecondName]=useState("");
  const [email,setEmail]=useState("")
  const [role,setRole]=useState('Viewer');
  const [tempUser,setTempUser]=useState("");
 const [user,setUser]=useState([])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit")

    const temp={firstName,secondName,email,password,role}
   setTempUser({ firstName,secondName,email,password,role });
   setUser((user)=>[...user,temp])
    setFirstName('')
    setSecondName('')
    setEmail('')
    setRole('')
    setPassword('')
    localStorage.setItem('user', user)
//     console.log(user)
  };
  console.log(user)

 


  
  return ( 
    <>
   
        
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} type="text" onChange={({ target }) => setFirstName(target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={secondName}   type="text" onChange={({target}) => setSecondName(target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' value={email}  type="email" onChange={({target}) => setEmail(target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' value={password} type="password" onChange={({target}) => setPassword(target.value)}/>
                </Form.Field>
                <Form.Field>
                <label>
          Pick your role:
          <select value={role} className='role'onChange={({target})=>setRole(target.value)}>
            <option value="Viewer">Viewer</option>
            <option value="Admin">Admin</option>
          </select>
        </label>
                </Form.Field>
              
                <Button type='submit'>Submit</Button>
            


  

            </Form>
      
           
  
     {user.length>0 && <Role tempUser={tempUser} user={user}/>}
     </>
  );
};

export default Login;
