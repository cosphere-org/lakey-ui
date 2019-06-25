import React from "react"
import { Container } from "semantic-ui-react"
import Layout from "src/modules/layout/components/Layout"
import SearchResults from "src/modules/catalog/components/SearchResults"

const NotebookPage = () => (
  <Layout>
    <Container>
      <SearchResults />
    </Container>
  </Layout>
)

export default NotebookPage
