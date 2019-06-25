import PropTypes from "prop-types"
import React from "react"
import {
  Button,
  Container,
  Divider,
  Header,
  Segment,
  Visibility,
} from "semantic-ui-react"
import { Link } from "gatsby"

import CatalogSearch from "src/modules/catalog/components/CatalogSearch"
import ScrollDownAnimation from "src/modules/layout/components/ScrollDownAnimation"

import Layout from "src/modules/layout/components/Layout"
import LakeyLogoBig from "src/modules/layout/components/LakeyLogoBig"

import { FixedMenuContext } from "src/modules/layout/components/DesktopContainer/DesktopContainer"

const HomepageHeading = ({ mobile }) => (
  <Segment
    style={{
      width: "100vw",
      marginLeft: -15,
      marginTop: -155,
      border: "none",
      minHeight: "100vh",
      padding: "1em 0em",
      borderRadius: 0,
      backgroundSize: "100% 100%",
      backgroundImage: `url(${"/static/images/lake_bck_1.jpg"})`,
    }}
    textAlign="center"
  >
    <Container
      text
      style={{
        paddingTop: "10vh",
      }}
    >
      <LakeyLogoBig />
      <Header
        as="h2"
        content="What data / research are you looking for?"
        inverted
        style={{
          fontSize: mobile ? "1.5em" : "1.7em",
          fontWeight: "normal",
          marginTop: mobile ? "0.5em" : "4em",
        }}
      />
      <FixedMenuContext.Consumer>
        {({ setFixedMenu }) => (
          <Visibility
            once={false}
            onBottomPassed={() => setFixedMenu(true)}
            onBottomPassedReverse={() => setFixedMenu(false)}
          >
            <CatalogSearch />
          </Visibility>
        )}
      </FixedMenuContext.Consumer>
      <ScrollDownAnimation />
    </Container>
  </Segment>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

HomepageHeading.defaultProps = {
  mobile: false,
}

const HomepageLayout = () => (
  <Layout initialFixedMenu={false}>
    <HomepageHeading />
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Room vs outside sensors
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          purus risus, vestibulum quis ullamcorper vel, pellentesque a est. In
          pharetra nisi feugiat lorem facilisis, ut scelerisque neque convallis.
          Vivamus nisi risus, bibendum id justo sit amet, porttitor hendrerit
          massa. Donec commodo lacus et tristique rutrum. Proin interdum neque
          quis arcu egestas congue. In in ullamcorper felis, quis dapibus
          lectus. Maecenas vel euismod lectus. Sed at sapien nec arcu interdum
          tristique.
        </p>
        <Link to="/rooms">
          <Button as="a" size="large">
            Read More
          </Button>
        </Link>
        <Divider />
        <Header as="h3" style={{ fontSize: "2em" }}>
          Geolocation exploration
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Praesent sit amet orci eget nibh semper porttitor. Nam ligula nulla,
          auctor in lacinia at, efficitur et leo. Curabitur at ligula in nulla
          finibus dictum nec sit amet elit. Donec id elit a dolor tristique
          mollis. Mauris suscipit vestibulum est ut varius. Pellentesque sapien
          lectus, rutrum vel suscipit non, auctor in felis. Morbi ex arcu,
          pulvinar nec magna nec, efficitur iaculis est. Praesent lorem ante,
          tincidunt id eros porttitor, dictum congue nisi. Sed pharetra
          elementum mauris. Duis facilisis ante vitae dolor fermentum feugiat.
          Suspendisse bibendum enim ut orci porttitor venenatis aliquet eu sem.
        </p>
        <Link to="/geolocation">
          <Button as="a" size="large">
            Read More
          </Button>
        </Link>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Anomalies detection
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Pellentesque nibh justo, porttitor nec commodo nec, maximus eget
          purus. Donec eu malesuada diam. Vestibulum nec dolor sagittis,
          volutpat massa quis, pretium mi. Praesent condimentum, lacus ut
          pulvinar suscipit, velit ex bibendum nunc, nec cursus risus mi sed
          massa. Ut non nisl quis magna tincidunt cursus. Sed diam eros, finibus
          id laoreet vel, rhoncus et lectus. Phasellus non lacinia lacus, vel
          imperdiet leo. In id leo nisl. Maecenas ex risus, maximus sit amet
          molestie ac, eleifend id nisl.
        </p>
        <Link to="/anomalies">
          <Button as="a" size="large">
            Read More
          </Button>
        </Link>
      </Container>
    </Segment>
  </Layout>
)
export default HomepageLayout
