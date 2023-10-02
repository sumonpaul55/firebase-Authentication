import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import app from '../../../../firebase.init';
const auth = getAuth(app)
const Loginpage = () => {

    const [useEmail, setUserEmail] = useState(null)
    const [userError, setUserError] = useState(null)
    const [name, setName] = useState("")
    const handleLogin = (e) => {
        setUserError("")
        setUserEmail("")
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        signInWithEmailAndPassword(auth, email, pass)
            .then(userCrendential => {
                console.log(userCrendential.user)
                setUserEmail(userCrendential.user.email)
                setName(userCrendential.user.displayName)

            }).catch(err => {
                console.log(err)
                setUserError("Password or Email didn't matched")
            })
    }
    const usedEmails = useRef(null)
    const handleforgetPass = () => {
        setUserError("")
        setUserEmail("")
        const usedEmail = usedEmails.current.value;
        if (!usedEmail) {
            alert("please provide a email")
            return
        } else {
            sendPasswordResetEmail(auth, usedEmail)
                .then(alert("please check you email"))
                .catch(err => {
                    setUserError(err)
                })
        }


    }
    return (
        <div className='container mx-auto mt-20'>
            <h1 className="text-3xl">Login Now</h1>
            <form onSubmit={handleLogin} className='space-y-4 mt-20 p-10 border rounded-lg'>
                <input className='border' type="email" name='email' placeholder='Enter your email' ref={usedEmails} />
                <div>
                    <input className='border' type="password" name='password' placeholder='Enter your Password' /><br />

                    <div className='flex items-center gap-3'>
                        <span>Dont Have account</span>
                        <Link to="/registration" className='text-red-800 block font-bold'>Please Register</Link>
                    </div>
                </div>
                <input type="submit" value="submit" className='px-3 py-1 bg-indigo-300' />
                <div className='text-red-700 cursor-pointer' onClick={handleforgetPass}>Forget password?</div>
            </form>

            <div>
                {
                    useEmail ? <div>
                        <h1 className="text-2xl text-blue-600">Name: {name}</h1>
                        <h1 className='text-3xl text-red-500'>Email: {useEmail}</h1>
                    </div> :
                        <h2>{userError}</h2>

                }
            </div>
        </div>
    );
};

export default Loginpage;