import React from 'react';

export default function Kreu() {
  return <section id="hero" className='hero'>
  <div class="background-image" style={{backgroundImage: "url(" + require("../../images/cufo_cover.jpg") + ")"}} ></div>
  <h1>Vjersha Shqiptare Për Fëmijë</h1>
  <h3>nga Folklori Shqiptar<br />
    <span class="smallerheadline">ilustrimet nga mdyle</span></h3>
</section>;
}