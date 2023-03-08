import React, {useState, useEffect } from 'react'
import HomeComp from '../components/HomeComp';
import { onAuthStateChanged } from 'firebase/auth';
import Loader from '../components/common/Loader';
import { auth } from '../firebaseConfig';

const Home = () => {


    const [loading, setloading] = useState(true)

    useEffect(() => {
        onAuthStateChanged(auth, res => {
            if (!res?.accessToken) {
                naigate('/')
            }
            else {
                setloading(false)
            }
        })
    }, [])
    

    return (
    <>
     {loading ? <Loader /> : <HomeComp />}
            </>
  )
}

export default Home