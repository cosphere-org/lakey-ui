import { connect } from "react-redux"

const mapStateToProps = state => ({
  items: state.catalog.items,
  query: state.catalog.query,
})

const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
