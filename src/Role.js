import React from 'react'
import { Link ,useParams} from "react-router-dom";
import Viewer from './Viewer';
import Dashboard from './Dashboard';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import Login from './Login';
export const Role = ({tempUser,user}) => {
   
  return (
    <>
    <p>Logged In</p>
    {tempUser.role==='Viewer' ?
     <Link to='viewer'>Click to view Map</Link>
     :

    <Dashboard user={user}/>
    }
    </>
  )
}

export default Role;
