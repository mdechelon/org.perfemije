import React, { useState } from 'react'
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
    //width: '500px',
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
    padding: '3em',
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
  //width: '500px',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.7)',
    right: '0px',
    top: '0px'
  }
}


const Navigation = () => {
  const [radioOn, setRadioOn] = useState(false)
  const [audioRef] = useState(() => typeof window !== 'undefined' ? new Audio() : null)
  const [currentTrack, setCurrentTrack] = useState(0)

  const radioSources = [
    'https://d3ii812fhgvnso.cloudfront.net/yljdhd.mp4',
    'https://d3ii812fhgvnso.cloudfront.net/loyre.mp4',
    'https://d3ii812fhgvnso.cloudfront.net/rydhg.mp4'
  ]

  const toggleRadio = () => {
    if (!audioRef) return

    if (!radioOn) {
      // Turn radio ON
      audioRef.src = radioSources[currentTrack]
      audioRef.play().catch(err => console.error('Error playing audio:', err))
      setRadioOn(true)
      console.log('Radio started - Playing:', radioSources[currentTrack])
    } else {
      // Turn radio OFF
      audioRef.pause()
      audioRef.currentTime = 0
      setRadioOn(false)
      console.log('Radio stopped')
    }
  }

  const handleTrackEnd = () => {
    if (radioOn) {
      // Move to next track
      const nextTrack = (currentTrack + 1) % radioSources.length
      setCurrentTrack(nextTrack)
      audioRef.src = radioSources[nextTrack]
      audioRef.play().catch(err => console.error('Error playing next track:', err))
      console.log('Playing next track:', radioSources[nextTrack])
    }
  }

  // Set up event listener for when track ends
  React.useEffect(() => {
    if (audioRef) {
      audioRef.addEventListener('ended', handleTrackEnd)
      return () => audioRef.removeEventListener('ended', handleTrackEnd)
    }
  }, [radioOn, currentTrack, audioRef])

  return (
<header>
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}> Per Femije</span>
    </Link>

    <button
      onClick={toggleRadio}
      className={styles.radioButton}
      aria-label={radioOn ? 'Turn off music radio' : 'Turn on music radio'}
      style={{
        padding: '0.5em 1em',
        marginRight: '1em',
        backgroundColor: radioOn ? '#a90000' : '#bdc3c7',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        textTransform: 'uppercase'
      }}
    >
      {radioOn ? '🎵 Radio ON' : '🎵 Radio OFF'}
    </button>

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
          <Link to="/artikuj/"  >
            Artikuj per femije
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
}

export default Navigation
