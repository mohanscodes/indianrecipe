import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/navbar/navbar";

import Home from "./Pages/Home/Home";
import Veg from "./Pages/Veg/Veg";
import FullPost from "./Pages/FullPost/FullPost";

import {GlobalProvider} from "./Context/GlobalState";

import Footer from './Pages/footer/footer'

const App = () => {

   return (

          <GlobalProvider>
          <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/veg" element={<Veg />} />
                <Route path="/fullpost" element={<FullPost />} />
              </Routes>
            <Footer/>
          </BrowserRouter>
          </GlobalProvider>
       );
      };

export default App;