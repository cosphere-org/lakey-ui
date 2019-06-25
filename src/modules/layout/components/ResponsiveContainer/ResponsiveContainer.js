import React from "react"
import PropTypes from "prop-types"

import DesktopContainer from "../DesktopContainer"
import MobileContainer from "../MobileContainer"

const ResponsiveContainer = ({ children, initialFixedMenu }) => (
  <div>
    <DesktopContainer initialFixedMenu={initialFixedMenu}>
      {children}
    </DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
  initialFixedMenu: PropTypes.bool,
}

export default ResponsiveContainer
