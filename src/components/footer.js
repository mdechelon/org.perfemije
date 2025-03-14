import React from 'react'
import { Link } from 'gatsby'
import Container from './container'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"


function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  return `${year}`;
}

const Footer = () => (
  <Container as="footer">
    <div>
    <p>Se shpejti na gjeni edhe ne rrjetet shoqerore</p>
    <ul>
              <li><Link to="https://www.facebook.com/profile.php?id=61573877501809" target="_blank"> <FontAwesomeIcon icon={faFacebookSquare} /></Link></li>
                    <li><a href="#" target="_blank"> <FontAwesomeIcon icon={faTwitterSquare} /></a></li>
                    <li><a href="#" target="_blank"> <FontAwesomeIcon icon={faInstagramSquare} /></a></li>
            </ul>
            <p>Lexoni <i>Vjersha Shqiptare per Femije</i> ne internet</p>
            <p>&copy; 2020 - {getDate()} Populli</p>
    </div>
  </Container>
)

export default Footer
