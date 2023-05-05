import React from 'react';
import {Link } from 'react-router-dom';     // Link c'est pour les routes hors de la navbar

const Error = () => {
    return (
        <main className='container mt-5'>
           <p className='display-6 text-center'>
                ERROR 404 <br />
                GO TO <Link to="/">HOME PAGE</Link>
           </p>
        </main>
    );
};

export default Error;