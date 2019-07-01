import { connect } from "react-redux"
import { onSearch } from "../../redux/catalog"

const mapStateToProps = null

const mapDispatchToProps = {
  onSearch,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
