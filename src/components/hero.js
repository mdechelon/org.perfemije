import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'


const Hero = ({ image, title, content }) => (
<>
 <link href="https://fonts.googleapis.com/css?family=Henny%20Penny" rel="stylesheet"></link>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"></link>

<section id="hero" className="hero">

  <div className="background-image">
   {image && image.file && image.file.url && (      <video className="video" id="background_video" autoPlay loop muted>
                  <source type="video/mp4" src={image.file.url}/>
         </video> )}
  </div>
  <h1>{title}</h1>
  {content && (
              <h3>{renderRichText(content)}</h3>)}
</section>
</>
)

export default Hero
