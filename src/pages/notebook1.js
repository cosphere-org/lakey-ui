import React from "react"
import { Header, Container } from "semantic-ui-react"

import Layout from "src/modules/layout/components/Layout"

export default () => (
  <Layout>
    <Container text>
      <Header as="h3" style={{ fontSize: "2em" }}>
        Some notebook article
      </Header>
      <p style={{ fontSize: "1.33em" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus purus
        risus, vestibulum quis ullamcorper vel, pellentesque a est. In pharetra
        nisi feugiat lorem facilisis, ut scelerisque neque convallis. Vivamus
        nisi risus, bibendum id justo sit amet, porttitor hendrerit massa. Donec
        commodo lacus et tristique rutrum. Proin interdum neque quis arcu
        egestas congue. In in ullamcorper felis, quis dapibus lectus. Maecenas
        vel euismod lectus. Sed at sapien nec arcu interdum tristique.
      </p>
      <p style={{ fontSize: "1.33em" }}>
        Proin vulputate nibh at urna molestie, ut volutpat justo lacinia. Donec
        hendrerit est malesuada, congue magna a, accumsan ipsum. Fusce imperdiet
        justo eros, eget fringilla leo aliquam nec. Praesent euismod vestibulum
        ultrices. Duis scelerisque convallis mi a ultrices. Morbi nec euismod
        turpis, sodales condimentum ex. Sed aliquet a felis ultrices vehicula.
        Pellentesque scelerisque augue quis lectus interdum fringilla.
        Suspendisse potenti. Mauris sit amet augue erat. Curabitur iaculis ex in
        purus gravida, at consectetur enim dignissim. Curabitur laoreet turpis
        vitae sapien facilisis aliquam. Integer vel neque molestie, tempus velit
        eget, pharetra nibh. Phasellus id gravida arcu. In vitae nisi accumsan,
        porta purus sit amet, gravida ipsum.
      </p>
      <p style={{ fontSize: "1.33em" }}>
        Duis in tortor vel neque finibus feugiat. Donec odio tellus, bibendum
        eget aliquam id, placerat et risus. Vestibulum commodo fringilla nisl,
        et efficitur tortor. Aenean eget augue felis. Aliquam erat volutpat.
        Aenean non metus eu ligula congue ornare. Sed posuere pulvinar enim,
        vitae molestie elit porttitor sed. Nam urna lacus, venenatis euismod
        vulputate eu, pulvinar non nunc. Nunc fringilla lacus elit, a feugiat
        nunc pretium ut. Nullam et odio et quam malesuada iaculis ut interdum
        libero. Curabitur posuere accumsan pharetra. Morbi suscipit convallis
        lorem quis maximus.
      </p>
      <p style={{ fontSize: "1.33em" }}>
        Praesent sit amet orci eget nibh semper porttitor. Nam ligula nulla,
        auctor in lacinia at, efficitur et leo. Curabitur at ligula in nulla
        finibus dictum nec sit amet elit. Donec id elit a dolor tristique
        mollis. Mauris suscipit vestibulum est ut varius. Pellentesque sapien
        lectus, rutrum vel suscipit non, auctor in felis. Morbi ex arcu,
        pulvinar nec magna nec, efficitur iaculis est. Praesent lorem ante,
        tincidunt id eros porttitor, dictum congue nisi. Sed pharetra elementum
        mauris. Duis facilisis ante vitae dolor fermentum feugiat. Suspendisse
        bibendum enim ut orci porttitor venenatis aliquet eu sem.
      </p>
    </Container>
  </Layout>
)
