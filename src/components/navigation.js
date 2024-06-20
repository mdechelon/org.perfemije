import React from 'react'
import { Link } from 'gatsby'


import * as styles from './navigation.module.css'

const Navigation = () => (
<header>
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}> Per Femije</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Kreu
        </Link>
      </li>
      <li >
        <Link to="/vjersha/" activeClassName="active">
          Vjersha
        </Link>
      </li>
      <li >
      <Link to="/misioni/" activeClassName="active">
        Misioni
      </Link>
    </li>
    <li >
          <Link to="/kontakt/" activeClassName="active">
            Kontakt
          </Link>
        </li>
    </ul>
  </nav>
</header>
)

export default Navigation
