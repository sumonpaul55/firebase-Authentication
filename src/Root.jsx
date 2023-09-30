import React from 'react';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </ >
    );
};

export default Root;