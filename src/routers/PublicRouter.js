import React from "react"
import PropTypes from "prop-types"
import {Route, Redirect} from "react-router-dom"

export const PublicRoute = ({
  isAuthenticated,
  noAuth,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) =>
      noAuth ? (
        <Component {...props} />
      ) : isAuthenticated ? (
        <Redirect to="/sample" />
      ) : (
        <Component {...props} />
      )
    }
  />
)

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  noAuth: PropTypes.bool,
  component: PropTypes.object
}

export default PublicRoute
