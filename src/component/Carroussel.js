import React from 'react';
import "./Carroussel.css"

const Carroussel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="images/car3.png" className="d-block w-100" alt="baniere"/>
                <div className="carousel-caption">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
             </div>
            </div>
       </div>
 );
};

export default Carroussel;