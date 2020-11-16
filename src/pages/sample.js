import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {startLogout} from "../store/actions/auth"

const SamplePage = ({startLogout}) => (
  <div>
    <h1>Sample Page</h1>
    <button type="button" onClick={() => startLogout()}>
      Logout
    </button>
  </div>
)

SamplePage.propTypes = {
  startLogout: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  startLogout
}

export default connect(undefined, mapDispatchToProps)(SamplePage)
