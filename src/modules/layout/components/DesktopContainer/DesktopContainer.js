import React, { useState, createContext } from "react"
import { Responsive, Segment } from "semantic-ui-react"
import PropTypes from "prop-types"
import Navbar from "../Navbar"
import Footer from "../Footer"

export const FixedMenuContext = createContext("fixedMenuContext")

const DesktopContainer = ({ children, initialFixedMenu = true }) => {
  const [fixedMenu, setFixedMenu] = useState(initialFixedMenu)
  return (
    // <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
    <Responsive>
      <Navbar fixedMenu={fixedMenu} />
      <Segment style={{ minHeight: "70vh", paddingTop: 70, marginBottom: 0 }}>
        <FixedMenuContext.Provider value={{ setFixedMenu }}>
          {children}
        </FixedMenuContext.Provider>
      </Segment>

      <Footer />
    </Responsive>
  )
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
  initialFixedMenu: PropTypes.bool,
}

export default DesktopContainer
