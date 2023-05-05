import React from 'react';  
import Navbar from './component/Navbar';
import Contact from './component/Contacts';
import Acceuil from './component/Acceuil';
import Error from './component/Error';
import { BrowserRouter,Routes,Route, } from 'react-router-dom';  // browser router,routes,route from react-router-dom c'est pour les routes de la nav    
import $ from 'jquery'   



const App = () => {

  
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
              <Route path='/' element={<Acceuil />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='*' element={<Error />}/>
        </Routes >
    </BrowserRouter>
        
  );
};

export default App;