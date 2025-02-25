import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import VideoThumbnail from 'react-video-thumbnail';

import * as styles from './intro.module.css'

const Intro = ({ image, videoUrl, title, content }) => (
              <div className={styles.hero}>
              {videoUrl && (
//              <div className={styles.image}>
//                <iframe width="100%" height="100%"
//                  src={videoUrl}
//                  frameborder="0"
//                  allow="autoplay; encrypted-media"
//                  allowfullscreen="true"
//                  title="video"
//                ></iframe></div>
                <div className={styles.image}>
                        <video width="100%" height="100%" src={videoUrl} controls  playsInline autostart autoplay controlslist="nodownload" />
                        </div>
                )
                }
                {!videoUrl && image && (
                  <GatsbyImage className={styles.image} alt={title} image={image} />
                )}
</div>
//                <VideoThumbnail
//                    videoUrl={videoUrl}
//                    thumbnailHandler={(thumbnail) => console.log(thumbnail)}
//                    width={120}
//                    height={80}
//                    />


            )

export default Intro
