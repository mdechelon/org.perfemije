import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Kontakt from '../components/kontakt'

class KontaktIndex extends React.Component {
  render() {
     const [kontakt] = get(this, 'props.data.allContentfulSection.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Kontakt" />
        <Kontakt

                          title={kontakt.title}
                          description={kontakt.description}
                        />
      </Layout>
    )
  }
}

export default KontaktIndex

export const pageQuery = graphql`
  query KontaktQuery {
    allContentfulSection(
                  filter: { contentful_id: { eq: "574EaDvaRQYpNePhHcGUsV" } }
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
