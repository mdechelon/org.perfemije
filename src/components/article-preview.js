import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Tags from './tags'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts, linkName, esIndex }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
   <section id="chapters" className={linkName==='/vjersha'? "chapters": "about"}>
   <div className={styles.h2}> <h2>{linkName ? linkName.substring(1): ""} per femije {esIndex ? "- Te Fundit" : "- Lista e plote" } </h2> {esIndex && <Link to={`${linkName}`} > shiko to gjitha →</Link> }</div>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={`${linkName}/${post.slug}`} className={styles.link}>
                <GatsbyImage alt="" image={post.heroImage.gatsbyImage} />
               <h2 className={styles.title}> {post.title}</h2>
              </Link>
              <div>
                {post.description?.raw && renderRichText(post.description)}
              </div>
              <div className={styles.meta}>
                <small className="meta">{post.publishDate}</small>
                <Tags tags={post.tags} />
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ArticlePreview
