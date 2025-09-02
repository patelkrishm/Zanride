import React from 'react'
import { TextField, Button } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
const Sign = () => {
  return (
    <>
        <div className=" login-container" style={{ borderRadius: '10px' }}>
                <div className=" login-data">
                    <div className=" login-header">
                        <h2>Sign Up</h2>
                    </div>
                    <div className=" login-input">
                    <TextField label="Enter Name" variant='outlined' type='text' className='id' sx={{ margin: 1 }} />
                        <br></br>
                        <TextField label="Enter Email" variant='outlined' type='text' className='id' sx={{ margin: 1 }} />
                        <br></br>
                        <TextField label="Enter Password" variant='outlined' type='password' className='password' sx={{ margin: 1 }} />
                    </div>
                    <div className=" sign-btn">
                        <Button sx={{ color: "white", fontSize: 18 }}>Sign Up</Button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Sign