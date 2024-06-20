import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Misioni from '../components/misioni'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [author] = get(this, 'props.data.allContentfulPerson.nodes')
    const [mission] = get(this, 'props.data.allContentfulSection.nodes')

    console.log(posts)
    console.log(author)
    console.log(mission)

    return (
      <Layout location={this.props.location}>
        <Hero
          image={author.image}
          title={author.name}
          content={author.shortBio}
        />
        <div style={{backgroundColor: "#fff"}}>
        <Misioni
          image={mission.image}
          title={mission.title}
          description={mission.description}
        />
        <ArticlePreview posts={posts} />
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { publishDate: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
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
    allContentfulPerson(
      filter: { contentful_id: { eq: "1HjrIWhJ1Lqrbrjg87Ea7a" } }
    ) {
      nodes {
        name
        shortBio {
          raw
        }
        title
        image {
            file {
            url }
        }
      }
    }
    allContentfulSection(
              filter: { contentful_id: { eq: "gWm2CxtzMO2dVB5WarYH3" } }
            ) {
      nodes {
        title
        description {
          raw
        }
        image{
          gatsbyImage(layout: FULL_WIDTH
                                  placeholder: BLURRED
                                  width: 100
                                  height: 400)
        }
      }
    }
  }
`
