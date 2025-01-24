import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import readingTime from 'reading-time'
import moment from 'moment'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Intro from '../components/intro'
import Tags from '../components/tags'
import * as styles from './blog-post.module.css'
import * as styles2 from '../components/intro.module.css'

class VjershaPostTemplate extends React.Component {
  render() {
    console.log(this.props)
    const post = get(this.props, 'data.contentfulVjersha')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')
//    const plainTextDescription = post.description ? documentToPlainTextString(
//       JSON.parse(post.description.raw)
//    ) : ""
    const plainTextDescription = ""
    const plainTextBody = documentToPlainTextString(JSON.parse(post.body.raw))
    const { minutes: timeToRead } = readingTime(plainTextBody)
    //console.log(post.publishDate);
    //console.log(moment(post.publishDate, 'MMMM Do, YYYY'));
    const formattedDate = moment(post.publishDate, 'MMMM Do, YYYY').format('DD-MM-YYYY');
    //console.log(formattedDate);

    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImage, description } = node.data.target
        return (
           <GatsbyImage
              image={getImage(gatsbyImage)}
              alt={description}
           />
         )
        },
      },
    };

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          description={plainTextDescription}
          image={`http:${post.heroImage.resize.src}`}
        />
        <Intro
          image={post.heroImage?.gatsbyImage}
          videoUrl={post.videoUrl}
          title={post.title}
          content={post.description}
        />
        <div className={styles2.hero}>
 <div className={styles2.details}>
                                  <h1 className={styles2.title}>{post.title}</h1>
                 </div>
                 </div>
        <div className={styles.container}>

          <span className={styles.meta}>
            {post.author?.name} &middot;{' '}
            <time dateTime={post.rawDate}>{formattedDate}</time> –{' '}
            {timeToRead} min lexim
          </span>
          <div className={styles.article}>
            <div className={styles.body}>
              {post.body?.raw && renderRichText(post.body, options)}
            </div>
            <Tags tags={post.tags} />
            {(previous || next) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {previous && (
                    <li>
                      <Link to={`/vjersha/${previous.slug}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/vjersha/${next.slug}`} rel="next">
                        {next.title} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default VjershaPostTemplate

export const pageQuery = graphql`
  query VjershaBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulVjersha(slug: { eq: $slug }) {
      slug
      title
      author {
        name
      }
      publishDate(formatString: "MMMM Do, YYYY")
      rawDate: publishDate
      heroImage {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      body {
        raw
        
      }
      tags
      description {
        raw
      }

    }
    previous: contentfulVjersha(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulVjersha(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`