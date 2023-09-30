import React, { useRef, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import app from '../../../firebase.init';
const PassLogin = () => {
    const auth = getAuth(app);
    const [useremail, setUseremail] = useState("");
    const [registerError, setRegisterError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showPass, setShowpass] = useState(false);
    // const [checked, setChecked] = useState(false)

    const handelSubmit = (e) => {
        e.preventDefault()
        const email = (e.target.email.value)
        const pass = (e.target.password.value)
        setRegisterError("")
        setSuccessMessage("")
        if (pass < 6) {
            setRegisterError("Password should be more than 6 charecter")
            return;
        } else if (!e.target.terms.checked) {
            setRegisterError("please accept the terms and conditions")
        } else {
            createUserWithEmailAndPassword(auth, email, pass)
                .then(result => {
                    setSuccessMessage("You have successfully user created");
                    setUseremail(result.user.email)

                }).catch((error) => {
                    setRegisterError(error.code)
                })
        }
    }
    const handleShow = () => {
        setShowpass(!showPass)
    }
    const email = useRef(null)
    const handleForagetPassword = () => {

        if (!email.current.value) {
            console.log("please Provide an Email")
        } else {
            sendPasswordResetEmail(auth, email.current.value)
                .then(() => {
                    alert("please check your mail")
                }).catch((error) => {
                    console.log(error)
                })
        }
        // console.log("forget pass")

    }
    return (
        <div className='container mx-auto mt-20'>
            <h1>Login with Password</h1>
            <form onSubmit={handelSubmit} className=''>
                <input type="email" name='email' ref={email} placeholder='Email' className="px-2 py-1 mb-4 border" /><br />
                <input type={showPass ? "text" : "password"} name='password' placeholder='passord' className="px-2 py-1 border" />
                {
                    <span onClick={handleShow} className='text-red-400 font-bold'>{showPass ? "showPass" : "handleShow"}</span>
                }
                <br />
                <input type="checkbox" name='terms' /><label htmlFor="">Accept Terms & Conditions</label><br />
                <input type="submit" value="Submit" className='mt-3 bg-indigo-400 px-2 py-1 text-white text-center' /><br></br>
            </form>
            <button className='text-red-400' onClick={handleForagetPassword}>Forget Password?</button>
            <div>
                {
                    useremail ?
                        <div>
                            <h2>{useremail.email}</h2>
                            <h2 className='text-xl'>{successMessage}</h2>
                        </div> :
                        registerError && <h2 className='text-xl text-red-600'>{registerError}</h2>
                }
            </div>
        </div >
    );
};
export default PassLogin;