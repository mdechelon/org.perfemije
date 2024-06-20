import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import * as styles from './hero.module.css'

const Kontakt = ({ title, description }) => (

 <section id="misioni" className="about">
 <ul className="grid">
  <li class="large" alt=""><h3>{title}</h3>
           <p>{renderRichText(description)}</p></li>
 </ul>
 </section>

)

export default Kontakt