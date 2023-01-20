import React from 'react';
import { Outlet } from 'react-router-dom';
import Movies from '../Movies/Movies';

const Main = () => {
    return (
        <div>
            <Movies></Movies>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;