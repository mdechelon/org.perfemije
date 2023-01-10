import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vjersha from './components/vjersha/vjersha';
import Kreu from './components/kreu/kreu';
import Meshume from './components/me_shume/meshume';
import Kontakt from './components/kontakt/kontakt';
import XhepiImIVogel from './components/vjersha/xhepi-im-i-vogel';
import QengjiIVogel from './components/vjersha/qengji-i-vogel';
import MojBubrrec from './components/vjersha/moj-bubrrec';
import RozaRozina from './components/vjersha/roza-rozina';
import NinaNana from './components/vjersha/ninulle-nina-nana';
import PaShikoniDuartTona from './components/vjersha/pa-shikoni-duart-tona';
import UneDheKominoshet from './components/vjersha/une-dhe-kominoshet';
import DergimiILetres from './components/vjersha/kenge-dhe-loje-dergimi-i-letres';

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Henny%20Penny" rel="stylesheet"></link>
      <header>
        <h2><a href="/" style={{visibility: 'hidden'}}>Per Femije</a></h2>
        <nav>
          <li><a href="/">Kreu</a></li>
          <li><a href="/vjersha">Vjersha</a></li>
          <li><a href="/meshume">Më shumë</a></li>
          <li><a href="/kontakt">Kontakt</a></li>

        </nav>
      </header>
      <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Kreu/>} /> 
          <Route path="/vjersha" element={ <Vjersha />}/>
          <Route path="/meshume" element={<Meshume />}/>
          <Route path="/kontakt" element={<Kontakt />}/>
          <Route exact path="/vjersha/xhepi-im-i-vogel" element= {<XhepiImIVogel />} />
          <Route exact path="/qengji-i-vogel" element= {<QengjiIVogel />} />
          <Route exact path="/moj-bubrrec" element= {<MojBubrrec />} />
          <Route exact path="/roza-rozina" element= {<RozaRozina />} />
           <Route exact path="/ninulle-nina-nana" element= {<NinaNana />} />
           <Route exact path="/pa-shikoni-duart-tona" element= {<PaShikoniDuartTona />} />
           <Route exact path="/une-dhe-kominoshet" element= {<UneDheKominoshet />} />
           <Route exact path="/dergimi-i-letres" element= {<DergimiILetres />} />
        </Routes>
      </BrowserRouter>
      
      

      <footer>
        <ul>
          <li><a href="#" target="_blank"><i class="fa fa-twitter-square"></i></a></li>
          <li><a href="#" target="_blank"><i class="fa fa-facebook-square"></i></a></li>
          <li><a href="#" target="_blank"><i class="fa fa-pinterest-square"></i></a></li>
        </ul>
        <p>Lexoni librin <i>Vjersha Shqiptare për Fëmije</i> në internet</p>
        <p>&copy;<script>document.write(new Date().getFullYear())</script> Populli</p>
      </footer>


    </div>
  );
}

export default App;
