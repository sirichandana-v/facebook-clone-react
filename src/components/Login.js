import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css";
import {auth, provider} from "../firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from '../reducer';


function Login() {
    const [{user}, dispatch]=useStateValue();
    
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            });
        }).catch(e=>alert(e.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" alt="facebook logo" />
                <h2>Facebook</h2>
            </div>
            <Button type="submit" onClick={signIn}>Login</Button>
        </div>
    )
}

export default Login
