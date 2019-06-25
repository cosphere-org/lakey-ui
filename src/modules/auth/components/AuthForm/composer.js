import { connect } from "react-redux"
import { onDummyAuth } from "../../redux/auth"

const mapStateToProps = null

const mapDispatchToProps = {
  onDummyAuth,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
