import React from 'react';
import app from '../../../../../firebase.init';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const Registration = () => {
    const auth = getAuth(app);
    const handleSubmit = (e) => {
        createUserWithEmailAndPassword(auth,)
        const email = e.target.email.value;
        const pass = e.target.password.value;

    }
    return (
        <div>
            <h1 className="text-3xl">Registration Now</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name='email' placeholder='Enter your email' />
                <div>
                    <input type="password" name='password' placeholder='Enter your Password' /><br />
                    <span></span>
                </div>
            </form>
        </div>
    );
};

export default Registration;