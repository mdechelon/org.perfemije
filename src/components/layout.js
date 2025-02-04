import React from 'react'

import './variables.css'
import './global.css'
import './index.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="App" id="outer-container">

        <Seo />
        <Navigation />
       <main id="page-wrap">{children}</main>
        <Footer />
      </div>
    )
  }
}

export default Template
