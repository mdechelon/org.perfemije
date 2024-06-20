import React from 'react'

import Container from './container'

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  return `${year}`;
}

const Footer = () => (
  <Container as="footer">
    <div>
    <ul>
              <li><a href="#" target="_blank"><i class="fa fa-twitter-square"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fa fa-facebook-square"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fa fa-snapchat-square"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fa fa-pinterest-square"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fa fa-github-square"></i></a></li>
            </ul>
            <p>Lexoni <i>Vjersha Shqiptare per Femije</i> ne internet</p>
            <p>&copy; 2020 - {getDate()} Populli</p>
    </div>
  </Container>
)

export default Footer
