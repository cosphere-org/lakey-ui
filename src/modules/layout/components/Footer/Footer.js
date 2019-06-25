import React from "react"
import { Container, Grid, Header, List, Segment } from "semantic-ui-react"

const Footer = () => (
  <Segment inverted vertical style={{ padding: "5em 0em" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">Sitemap</List.Item>
              <List.Item as="a">Team</List.Item>
              <List.Item as="a">Contact Us</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Help" />
            <List link inverted>
              <List.Item as="a">FAQ</List.Item>
              <List.Item as="a">How To Access Data</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              Lakey
            </Header>
            <p>Make Big Data small.</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)
export default Footer
