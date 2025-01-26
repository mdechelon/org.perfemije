import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Mbeshtet from '../components/mbeshtet'

class MbeshtetIndex extends React.Component {
  render() {
   const [mbeshtet] = get(this, 'props.data.allContentfulSection.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title={mbeshtet.title} />
         <Mbeshtet
                  image={mbeshtet.image}
                  title={mbeshtet.title}
                  description={mbeshtet.description}
                />
      </Layout>
    )
  }
}

export default MbeshtetIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulSection(
                  filter: { contentful_id: { eq: "572D3Nee3mLCpkpCHZSKin" } }
                ) {
          nodes {
            title
            description {
              raw
            }
            image{
              gatsbyImage(layout: FULL_WIDTH
                                      placeholder: BLURRED
                                      width: 50
                                      height: 110)
            }
          }
        }
  }
`
