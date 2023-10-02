import React, { useState } from 'react';
import app from '../../../firebase.init';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);
import { Link } from 'react-router-dom';
const Registration = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("")
    const [show, setShow] = useState(false)
    const handleSubmit = (e) => {
        setError("")
        setSuccess("")
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        const checked = e.target.checkbox.checked;
        if (!checked) {
            setError("You should check Terms & conditions")
            return
        } else if (!/[A-Z]/.test(pass)) {
            setError("Password should at least one Capital letter");
            return
        }
        else {
            createUserWithEmailAndPassword(auth, email, pass)
                .then((result) => {
                    result && setSuccess("Account has been successfully created")
                }).catch((error) => {
                    setError(error)
                })
        }
    }
    // console.log("error", error)
    return (
        <div className='container mx-auto mt-20'>
            <h1 className="text-3xl">Registration Now</h1>
            <form onSubmit={handleSubmit} className='space-y-4 mt-20 p-10 border rounded-lg'>
                <input className='border' type="email" name='email' placeholder='Enter your email' />
                <div>
                    <div>
                        <input className='border' type={show ? "text" : "password"} name='password' placeholder='Enter your Password' />
                        <span onClick={() => setShow(!show)} className='ml-1 border'>{show ? "hide" : "show"}</span>
                    </div>
                    <div>
                        <input type="checkbox" name='checkbox' /><label htmlFor="" name="checkbox" className='ml-1 text-indigo-400 mt-1'>Accept terms & conditions</label>
                    </div>
                    <Link to="/login" className='mt-5 text-red-800 block'>Login instead</Link>
                </div>
                <input type="submit" value="submit" className='px-3 py-1 bg-indigo-300' />
            </form>
            <div className='mt-10'>
                <h2 className="text-3xl font-bold">{success ? `${success}` : `${error}`}</h2>
            </div>
        </div>
    );
};

export default Registration;