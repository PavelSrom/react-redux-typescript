import React from "react"
import { Route, Redirect, RouteComponentProps } from "react-router-dom"
import { useSelector } from "react-redux"
import { AppState } from "store"

interface Props {
  exact: boolean
  path: string
  component: React.ComponentType<RouteComponentProps>
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(
    (state: AppState) => state.auth.isAuthenticated
  )

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

export default PrivateRoute
