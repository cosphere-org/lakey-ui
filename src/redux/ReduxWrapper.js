import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
import store from "./store"

const ReduxWrapper = ({ element }) => (
  <Provider store={store}>{element}</Provider>
)

ReduxWrapper.propTypes = {
  element: PropTypes.node.isRequired,
}

export default ReduxWrapper
