import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vjersha from './components/vjersha/vjersha';
import Kreu from './components/kreu/kreu';
import Meshume from './components/me_shume/meshume';
import Kontakt from './components/kontakt/kontakt';

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
