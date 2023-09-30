import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import app from '../../../firebase.init';
const PassLogin = () => {
    const auth = getAuth(app);


    const handelSubmit = (e) => {
        e.preventDefault()
        const email = (e.target.email.value)
        const pass = (e.target.password.value)
        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                console.log(result.user)
            }).catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className='container mx-auto mt-20'>
            <h1>Login with Password</h1>


            <form onSubmit={handelSubmit} className=''>
                <input type="email" name='email' placeholder='Email' className="px-2 py-1 mb-4 border" /><br />
                <input type="password" name='password' placeholder='passord' className="px-2 py-1 border" /><br />
                <input type="submit" value="Submit" className='mt-3 bg-indigo-400 px-2 py-1 text-white text-center' />
            </form>
        </div>
    );
};

export default PassLogin;