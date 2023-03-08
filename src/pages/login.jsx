import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import LoginComponent from '../components/LoginComponent'
import { auth } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/common/Loader'


const Login = (props) => {

  const [loading, setloading] = useState(true)

  const naigate=useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, res => {
  
      if (res?.accessToken) {
        naigate('/home')
      }
      else {
        setloading(false)
      }
    })
},[])
  return (
    <>
    {loading ? <Loader/> : <LoginComponent />}
           </> 
  )
}

export default Login