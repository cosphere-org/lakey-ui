import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LakeyLogoBig = () => (
  <StaticQuery
    query={graphql`
      query {
        lakeyBig: file(relativePath: { eq: "lakey_logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.lakeyBig.childImageSharp.fluid} />}
  />
)

export default LakeyLogoBig
