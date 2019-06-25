import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "semantic-ui-css/semantic.min.css"

import ResponsiveContainer from "../ResponsiveContainer"

const Layout = ({ children, initialFixedMenu }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <ResponsiveContainer initialFixedMenu={initialFixedMenu}>
        {children}
      </ResponsiveContainer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  initialFixedMenu: PropTypes.bool,
}

export default Layout
