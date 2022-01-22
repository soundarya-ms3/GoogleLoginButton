import React, {useState} from 'react'
import { GoogleLogin, GoogleLogout} from 'react-google-login'

export default function Login() {

    const clientId = "200803344201-crl6fgnv9vrmc5msjn869d93sbejoo59.apps.googleusercontent.com"
    const [showLoginButton, setShowLoginButton ] = useState(true)
    const [showLogoutButton, setShowLogoutButton ] = useState(false)


    const onLoginSuccess = (res) =>{
        console.log('Login Success',res.profileObj)
        setShowLoginButton(false)
        setShowLogoutButton(true)

    }

    const onFailureSuccess = (res) =>{
        console.log('Login Failed',res)
    }   
    const onSignoutSuccess = () =>{
        alert("You have been signed out")
        setShowLoginButton(true)
        setShowLogoutButton(false)
        console.clear()
        
    } 
    

    return (
        <div>
            {showLoginButton ? <GoogleLogin 
            clientId={clientId}
            buttonText="Login"
            onSuccess={onLoginSuccess}
            onFailure={onFailureSuccess}
            cookiePolicy={'single_host_origin'}
            /> : null }
            
            {showLogoutButton ?  <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSignoutSuccess}
            >
            </GoogleLogout> : null}
           
            
        </div>
    )
}
