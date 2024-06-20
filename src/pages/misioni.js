import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Misioni from '../components/misioni'

class MisioniIndex extends React.Component {
  render() {
   const [mission] = get(this, 'props.data.allContentfulSection.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Misioni" />
         <Misioni
                  image={mission.image}
                  title={mission.title}
                  description={mission.description}
                />
      </Layout>
    )
  }
}

export default MisioniIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
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
