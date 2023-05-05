import React from 'react';
import {NavLink} from 'react-router-dom';    // recat-router-dom c'est pour creer les routes en react

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light sticky-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">MonSite</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item px-3">
                        <NavLink className="nav-link" aria-current="page" to="/" style={({isActive})=>({color:isActive?'red':'black'})}>Acceuil</NavLink>
                    </li>
                    <li className="nav-item px-3">
                        <NavLink className="nav-link" to="/contact" style={({isActive})=>({color:isActive?'red':'black'})}>Contact</NavLink>
                    </li>   
                </ul>
                </div>
            </div>
       </nav>
       
    );
};

export default Navbar;