import React from "react"
import { Message } from "semantic-ui-react"
import PropTypes from "prop-types"
import CatalogItem from "../CatalogItem"

export const SearchResults = ({ query, items }) => {
  if (items.length) {
    return items.map(item => <CatalogItem key={item.id} {...item} />)
  }
  if (query) {
    return <Message info>I find nothing :(</Message>
  }
  return <Message info>Please type query and click search</Message>
}

SearchResults.propTypes = {
  query: PropTypes.string,
  items: PropTypes.array,
}

export default SearchResults
