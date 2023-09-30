import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='flex justify-center gap-5'>
            <Link to="/">Home</Link>
            <Link to="/registration">Registration</Link>
        </div>
    );
};

export default Header;