import React, {Suspense, lazy} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {BrowserRouter as Router, Switch} from "react-router-dom"

import PublicRoute from "./PublicRouter"
import PrivateRoute from "./PrivateRouter"

const IndexPage = lazy(() => import("../pages/"))
const SamplePage = lazy(() => import("../pages/sample"))

const AppRouter = ({isAuthenticated}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router basename={"index.html#"}>
        <Switch>
          <PublicRoute
            isAuthenticated={isAuthenticated}
            path="/"
            component={IndexPage}
            exact
          />
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            path="/sample"
            exact
            name="sample"
            component={SamplePage}
          />
        </Switch>
      </Router>
    </Suspense>
  )
}

const mapStateToProps = ({auth}) => ({
  isAuthenticated: auth.isAuthenticated
})

AppRouter.propTypes = {
  isAuthenticated: PropTypes.bool
}

export default connect(mapStateToProps)(AppRouter)
