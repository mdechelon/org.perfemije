import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

//import * as styles from './hero.module.css'

const Misioni = ({ image, title, description }) => (

 <section id="misioni" className="about">
<div className="goside">
 <ul className="grid">
  <li className="large" alt=""><h3>{title}</h3>
           {renderRichText(description)}</li>
         <li className="small" alt="">
         <div style={{width: "100px", margin: "20%"}}> {image && (
                                                <GatsbyImage  alt={title} image={image.gatsbyImage} />
                                               )}</div>
         </li>
 </ul>
 </div>




 </section>

)

export default Misioni