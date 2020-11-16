import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {startLogin} from "../store/actions/auth"

const IndexPage = ({startLogin}) => (
  <div>
    <h1>Boilerplate</h1>
    <button type="button" onClick={() => startLogin()}>
      Login
    </button>
  </div>
)

IndexPage.propTypes = {
  startLogin: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  startLogin
}

export default connect(undefined, mapDispatchToProps)(IndexPage)
