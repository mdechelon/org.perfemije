import React from 'react'
import { Link } from 'gatsby'
import Container from './container'


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
              <li><Link to="#" target="_blank"><i className="fa-brands fa-square-twitter"></i></Link></li>
                    <li><a href="#" target="_blank"><i className="fa-brands fa-square-facebook"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fa-brands fa-square-instagram"></i></a></li>
            </ul>
            <p>Lexoni <i>Vjersha Shqiptare per Femije</i> ne internet</p>
            <p>&copy; 2020 - {getDate()} Populli</p>
    </div>
  </Container>
)

export default Footer
