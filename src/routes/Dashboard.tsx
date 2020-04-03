import React from "react"
import { RouteComponentProps, useRouteMatch } from "react-router-dom"

interface Props extends RouteComponentProps {}

const Dashboard: React.FC<Props> = () => {
  const match = useRouteMatch()
  console.log(match)

  return (
    <div>
      <p>Dashboard</p>
    </div>
  )
}

export default Dashboard
