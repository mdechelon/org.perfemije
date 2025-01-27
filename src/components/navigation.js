import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'



import * as styles from './navigation.module.css'

var styles1 =  {
  bmBurgerButton: {
 position: 'relative',
 //display: 'flex',
  width: '36px',
  height: '30px',
  //right: '36px',
  //top: '30px',
  // right: 0;
  float: 'right'

  },
  bmBurgerBars: {
    background: '#bdc3c7'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    width: '500px',
    right: '0px',
    top: '0px'
  },
  bmMenu: {
    background: '#444',
   padding: '0',
   margin: '0',
   width: '100%'
//    fontSize: '1.15em'
  },
  //bmMorphShape: {
    //fill: '#373a47'
  //},
  bmItemList: {
    //color: '#b8b7ad',
    padding: '5em',
    fontWeight: '500',
    font: 'normal 16px "Open Sans", sans-serif'
  },
  bmItem: {
    //display: 'inline-block'
    padding: '1em',
    textTransform: 'uppercase'
  },
  bmOverlay: {
  position:'fixed',
  width: '500px',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.7)',
    right: '0px',
    top: '0px'
  }
}


const Navigation = () => (
<header>
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}> Per Femije</span>
    </Link>

     <Menu styles={styles1} right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
          <Link to="/"  >
            Kreu
          </Link>

            <Link to="/kenge/"  >
            Kenge per femije
          </Link>
          <Link to="/vjersha/"  >
            Vjersha per femije
          </Link>

        <Link to="/misioni/" >
          Misioni
        </Link>
         <Link to="/dhuro/" >
                  Mbeshtet
                </Link>

            <Link to="/kontakt/"  >
              Kontakt
            </Link>
       </Menu>

  </nav>

</header>
)

export default Navigation
