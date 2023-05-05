import React from 'react';

import OwlCarousel from 'react-owl-carousel';    //les 3 lignes import on été pris dans react-owl-carousel-npm(navigateur) pour les effets du theme du carousel 
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const CarSlide = () => {

const options={                     // on cree la const options pour mettre les parametres des effets de la carousel
    loop:true,                       //  ..basic..   dans owl carousel(navigateur) on va dans demo, puis basic on prend loup jusqu'a items 5
    
    autoplay:true,
    autoplayTimeout:2000,          //autoplay(les parametres de autoplay sont entre loop et margin:les parametres de basic)
    autoplayHoverPause:true,

    margin:10,                //basic
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }                 // de loup jusqu'ici (basic)
}

    return (
        <main className='container mt-5'>
               <h2 className='display-6 text-center'><strong>NOS VOITURES</strong></h2>  
               <section className='row'>
                      <aside className='col-md-3'>
                            <div className='item'>
                                <div class="card mb-3">
                                        <img src="images/car7.jpg" class="card-img-top" alt="car"/>
                                        <div class="card-body">
                                            <h5 class="card-title">BUGATTI</h5>
                                            <p class="card-text">faites votre choix ici</p>
                                            <a href="#" class="btn btn-primary">CHOISIR</a>
                                        </div>
                                </div>
                            </div>
                      </aside>
                      <aside className='col-md-9 mt-2'>
                        <OwlCarousel className='owl-theme' {...options}>   
                    
                            <div className='item'>
                                <div class="card mb-3">
                                        <img src="images/car8.jpg" class="card-img-top" alt="car"/>
                                        <div class="card-body">
                                            <h5 class="card-title">FERRARI</h5>
                                            <p class="card-text">faites votre choix ici</p>
                                            <a href="#" class="btn btn-primary">CHOISIR</a>
                                        </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div class="card mb-3">
                                        <img src="images/car9.jpg" class="card-img-top" alt="car"/>
                                        <div class="card-body">
                                            <h5 class="card-title">LAMBORGINI</h5>
                                            <p class="card-text">faites votre choix ici</p>
                                            <a href="#" class="btn btn-primary">CHOISIR</a>
                                        </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div class="card mb-3">
                                        <img src="images/car10.jpg" class="card-img-top" alt="car"/>
                                        <div class="card-body">
                                            <h5 class="card-title">FERRARI JS</h5>
                                            <p class="card-text">faites votre choix ici</p>
                                            <a href="#" class="btn btn-primary">CHOISIR</a>
                                        </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div class="card mb-3">
                                        <img src="images/car11.jpg" class="card-img-top" alt="car"/>
                                        <div class="card-body">
                                            <h5 class="card-title">BM W</h5>
                                            <p class="card-text">faites votre choix ici</p>
                                            <a href="#" class="btn btn-primary">CHOISIR</a>
                                        </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div class="card mb-3">
                                        <img src="images/car12.jpg" class="card-img-top" alt="car"/>
                                        <div class="card-body">
                                            <h5 class="card-title">V8</h5>
                                            <p class="card-text">faites votre choix ici</p>
                                            <a href="#" class="btn btn-primary">CHOISIR</a>
                                        </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div class="card mb-3">
                                        <img src="images/car13.jpg" class="card-img-top" alt="car"/>
                                        <div class="card-body">
                                            <h5 class="card-title">BUGATTI GH</h5>
                                            <p class="card-text">faites votre choix ici</p>
                                            <a href="#" class="btn btn-primary">CHOISIR</a>
                                        </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div class="card mb-3">
                                        <img src="images/car14.jpg" class="card-img-top" alt="car"/>
                                        <div class="card-body">
                                            <h5 class="card-title">LAMBORGINI</h5>
                                            <p class="card-text">faites votre choix ici</p>
                                            <a href="#" class="btn btn-primary">CHOISIR</a>
                                        </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div class="card mb-3">
                                        <img src="images/car18.jpg" class="card-img-top" alt="car"/>
                                        <div class="card-body">
                                            <h5 class="card-title">FORD</h5>
                                            <p class="card-text">faites votre choix ici</p>
                                            <a href="#" class="btn btn-primary">CHOISIR</a>
                                        </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div class="card mb-3">
                                        <img src="images/car16.jpg" class="card-img-top" alt="car"/>
                                        <div class="card-body">
                                            <h5 class="card-title">RANGE ROVER</h5>
                                            <p class="card-text">faites votre choix ici</p>
                                            <a href="#" class="btn btn-primary">CHOISIR</a>
                                        </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div class="card mb-3">
                                        <img src="images/car17.jpg" class="card-img-top" alt="car"/>
                                        <div class="card-body">
                                            <h5 class="card-title">PORCH</h5>
                                            <p class="card-text">faites votre choix ici</p>
                                            <a href="#" class="btn btn-primary">CHOISIR</a>
                                        </div>
                                </div>
                            </div>

                        </OwlCarousel>
                      </aside>
                </section>      
        </main>
    );
};

export default CarSlide;