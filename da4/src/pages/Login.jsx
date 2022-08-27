import React, { useState } from 'react'
import { Input , Box } from "@chakra-ui/react"
import {useNavigate} from "react-router-dom"
import "./Login.css"

const Login = () => {

    const navigate = useNavigate();
    const initialValue = {email:"" , password:""}
    const [formvalue , setFormvalue] = useState(initialValue)
   
    const handleChange = (e) => {
           console.log(e.target)
           const { name , value } = e.target;
           setFormvalue({ ...formvalue, [name ]: value })
    }

    const handleSubmit =(e) => {
       e.preventDefault();
       navigate("/")
    }
    console.log(formvalue)
  
    return (
    <div className='container'>
       
        <form onSubmit={handleSubmit}>
        <h1 className='heading1'>Ready to take the next step?</h1>
        <br />
        <h1 className='heading2'>Create an account or sign in.</h1>
        <br />
           <Box className='imgOne'><img style={{ height:"25px"}}src="https://www.polymtl.ca/calendrier/sites/calendrier.amigow2020.polymtl.ca/files/googlelogo.jpg"
                                   alt="" />Continue with Google</Box>
           <br />
           <Box className='imgOne'><img style={{ height:"25px"}} src="https://i.pinimg.com/originals/3a/09/d4/3a09d4b9b04b01132ffc71df14b59177.jpg" alt="" />Continue with Apple</Box>
            <br />
            <div className='ui divider'></div>
            <div className='ui form'>
                <div className='feild'>
                  <label htmlFor="">Email</label>
                  <Input type="email"
                   name="email"
                    placholder="Email"
                    value={formvalue.email}
                    onChange={handleChange}
                    ></Input>

                </div>
                <div className='feild'>
                     <label htmlFor="">Password</label>
                     <Input type="password"
                      name='password'
                      value={formvalue.password}
                      onChange={handleChange}
                      ></Input>
                </div>
               <br />
               <p className='paralogin'>By creating an account or logging in, you understand and agree to Indeed's Terms. You also acknowledge our Cookie and Privacy policies. You will receive marketing messages from Indeed and may opt out at any time by following the unsubscribe link in our messages, or as detailed in our terms.</p>
                <Input backgroundColor="rgb(37, 87, 167)" color="white" type="submit" placeholder='Continue'/>

            </div>
          
        </form>
    </div>
  )
}

export default Login