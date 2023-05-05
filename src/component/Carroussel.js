import React from 'react';
import "./Carroussel.css"

const Carroussel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="images/car3.png" className="d-block w-100" alt="baniere"/>
                <div className="carousel-caption">
                    <h5>BIENVENUE CHEZ MONSITE</h5>
                    <p>Les meilleurs choix</p>
                </div>
             </div>
            </div>
       </div>
 );
};

export default Carroussel;