import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"

import AppRouter from "./routers/AppRouter"
import configureStore from "./store/configureStore"
import "./index.css"
import reportWebVitals from "./reportWebVitals"

const store = configureStore()

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
