import React from 'react';

const Loginpage = () => {
    const handleSubmit = () => {
        console.log("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='Email here' />
                <input type="password" name="password" placeholder='password' />
            </form>
        </div>
    );
};

export default Loginpage;