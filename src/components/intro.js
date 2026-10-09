import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './intro.module.css'

const getYoutubeEmbedUrl = (videoUrl) => {
  try {
    const url = new URL(videoUrl)
    const videoId =
      url.hostname === 'youtu.be'
        ? url.pathname.slice(1)
        : url.searchParams.get('v') ||
          url.pathname.match(/\/(?:embed|shorts|live)\/([^/]+)/)?.[1]

    if (!videoId) return videoUrl

    const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`)
    embedUrl.searchParams.set('rel', '0')
//    embedUrl.searchParams.set('controls', '0')
    return embedUrl.toString()
  } catch {
    return videoUrl
  }
}

const Intro = ({ image, videoUrl, title }) => (
  <div className={styles.hero}>
    {videoUrl ? (
      /youtube/i.test(videoUrl) ? (
        <div className={`${styles.image} ${styles.youtubeFrame}`}>
          <iframe
            width="100%"
            height="100%"
            src={getYoutubeEmbedUrl(videoUrl)}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
          <div className={styles.youtubeBottomMask} aria-hidden="true" />
        </div>
      ) : (
        <div className={styles.image}>
          <video width="100%" height="100%" controls playsInline controlsList="nodownload">
            <source type="video/mp4" src={videoUrl} />
          </video>
        </div>
      )
    ) : (
      image && <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
  </div>
)

export default Intro
