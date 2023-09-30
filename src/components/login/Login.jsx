import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider } from "firebase/auth";
import app from '../../../firebase.init';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()
    const gitHubprovider = new GithubAuthProvider();
    const [user, setUser] = useState(null)

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setUser(error.message)
            })
    }
    const handleLoginGithub = () => {
        signInWithPopup(auth, gitHubprovider)
            .then(result => {
                setUser(result.user)
            }).catch((err) => {
                console(err.message, err.code)
            })
    }
    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='text-center mt-20'>
            <div>
                {user ?
                    <button onClick={handleSignout} className='border px-4 py-2 bg-indigo-200 mx-auto'>signout</button> :
                    <div>
                        <button onClick={handleLogin} className='border px-4 py-2 bg-indigo-200 mx-auto'>Google login</button>
                        <button onClick={handleLoginGithub} className='border px-4 py-2 bg-indigo-200 mx-auto'>Google withGithub</button>
                    </div>
                }
            </div>
            <div>
                <h1 className="text-3xl">{user && "Name : " + user.displayName}</h1>
                <h3 className="text-2xl mt-4">{user && "Email : " + user.email}</h3>
                <div className='text-center mt-4'>
                    <img src={user?.photoURL} className='mx-auto rounded-full' alt="" />
                </div>
                <h5 className='text-xl'>{user && "Phone : " + user?.phoneNumber}</h5>
            </div>
        </div >
    );
};

export default Login;