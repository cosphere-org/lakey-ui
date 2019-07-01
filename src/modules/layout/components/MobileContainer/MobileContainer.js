import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from "semantic-ui-react"

// Heads up!
// We using React Static to prerender our docs with server side rendering,
// this is a quite simple solution. For more advanced usage please check
// Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined"
  // eslint-disable-next-line
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const MobileContainer = ({ children }) => {
  const [sidebarOpened, setSideBarOpened] = useState(false)

  const handleSidebarHide = () => setSideBarOpened(false)

  const handleToggle = () => setSideBarOpened(true)

  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
    >
      <Sidebar
        as={Menu}
        animation="push"
        inverted
        onHide={handleSidebarHide}
        vertical
        visible={sidebarOpened}
      >
        <Menu.Item as="a" active>
          Home
        </Menu.Item>
        <Menu.Item as="a">Work</Menu.Item>
        <Menu.Item as="a">Company</Menu.Item>
        <Menu.Item as="a">Careers</Menu.Item>
        <Menu.Item as="a">Log in</Menu.Item>
        <Menu.Item as="a">Sign Up</Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 350, padding: "1em 0em" }}
          vertical
        >
          <Container>
            <Menu inverted pointing secondary size="large">
              <Menu.Item onClick={handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted>
                  Log in
                </Button>
                <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Menu>
          </Container>
          {/* <HomepageHeading mobile /> */}
        </Segment>

        {children}
      </Sidebar.Pusher>
    </Responsive>
  )
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

export default MobileContainer
