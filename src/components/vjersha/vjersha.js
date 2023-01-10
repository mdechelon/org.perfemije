import React from 'react';
import XhepiImIVogel from './xhepi-im-i-vogel';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';

export default function Vjersha() {
  return <section id="vjersha" class="chap1">
  {/* <img src="../../images/veshkaushi.jpg" alt="Gabimet e Veshkaushit" title="Gabimet e Veshkaushit" class="round"/> */}
      <ul>
          <li><Link to="/vjersha/xhepi-im-i-vogel">Xhepi im i vogel</Link></li> 
          <li><Link to="/vjersha/qengji-i-vogel">Qengji i vogël</Link></li>
          <li><Link to="/vjersha/moj-bubrrec">Moj bubrrec</Link></li>
          <li><Link to="/vjersha/roza-rozina">Roza rozina</Link></li>
          <li><Link to="/vjersha/ninulle-nina-nana">Ninullë nina nana</Link></li>
          <li><Link to="/vjersha/pa-shikoni-duart-tona">Pa shikoni duart tona</Link></li>
          <li><Link to="/vjersha/une-dhe-kominoshet">Unë dhe kominoshet</Link></li>
          <li><Link to="/vjersha/dergimi-i-letres">Kenge-loje: Dergimi i Letres</Link></li>
      </ul>
  </section>  
  

}