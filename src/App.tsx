import React, { useEffect } from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"
import { connect, useSelector, useDispatch } from "react-redux"
import Home from "./components/Home"
import { AppState } from "./store"
import { loginUser } from "./store/actions/auth"

import {} from "components" // works as NPM modules
import PrivateRoute from "hoc/PrivateRoute"
import Dashboard from "routes/Dashboard"
import Login from "routes/Login"

const App: React.FC = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state: AppState) => state.auth.isAuthenticated)
  console.log(isAuth)

  useEffect(() => {
    dispatch(loginUser())
  })

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  )
}

// autocompletion for mapStateToProps
// interface creation for props and adding this to it does NOT work
const mapStateToProps = (state: AppState) => ({
  isAuth: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(App)
