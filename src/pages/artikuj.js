import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class ArtikujIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulArtikuj.nodes')
    return (
      <Layout location={this.props.location}>
        <Seo title="Artikuj per femije" />
        <div style={{paddingTop: "60px"}}>
        <ArticlePreview posts={posts} linkName="/artikuj" />
        </div>
      </Layout>
    )
  }
}

export default ArtikujIndex

export const pageQuery = graphql`
  query ArtikujIndexQuery {
    allContentfulArtikuj(sort: { publishDate: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
  }
`

