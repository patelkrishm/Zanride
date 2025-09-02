import React from 'react'
import { TextField, Button } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
const Login = () => {
    return (
        <>
            <div className=" login-container" style={{ borderRadius: '10px' }}>
                <div className=" login-data">
                    <div className=" login-header">
                        <h2>Login</h2>
                    </div>
                    <div className=" login-input">
                        <MailIcon className=' login-email' sx={{ fontSize: 25,color:"black" }} /><TextField label="Enter Email" variant='outlined' type='text' className='id' sx={{ margin: 1 }} />
                        <br></br>
                        <LockIcon className=' login-email' sx={{ fontSize: 25,color:"black" }} /><TextField label="Enter Password" variant='outlined' type='password' className='password' sx={{ margin: 1 }} />
                    </div>
                    <div className=" login-forgot">
                        <Button >Forgot Password?</Button>
                    </div>
                    <div className=" login-btn">
                        <Button sx={{ color: "white", fontSize: 18 }}>Login</Button>
                    </div>
                    <div className=" login-sign">
                        <p>or sign up using</p>
                        <Button>Sign Up</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login