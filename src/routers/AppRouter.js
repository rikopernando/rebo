import React, {Suspense, lazy} from "react"
import {ThemeProvider} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {BrowserRouter as Router, Switch} from "react-router-dom"

import theme from "../styles/theme"
import PublicRoute from "./PublicRouter"
import PrivateRoute from "./PrivateRouter"

const IndexPage = lazy(() => import("../pages/"))
const SamplePage = lazy(() => import("../pages/sample"))

const AppRouter = ({isAuthenticated}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <main>
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
      </main>
    </ThemeProvider>
  )
}

const mapStateToProps = ({auth}) => ({
  isAuthenticated: auth.isAuthenticated
})

AppRouter.propTypes = {
  isAuthenticated: PropTypes.bool
}

export default connect(mapStateToProps)(AppRouter)
