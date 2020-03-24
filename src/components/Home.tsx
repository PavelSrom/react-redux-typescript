import React, { useState } from "react"
import Child from "./Child"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../store/actions/profile"
import { AppState } from "../store"

const Home: React.FC = () => {
  const profile = useSelector((state: AppState) => state.profile.profile)
  console.log(profile)
  const dispatch = useDispatch()
  const [name, setName] = useState<string>("Pavel")

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget)
    setName(name === "Pavel" ? "Thomas" : "Pavel")

    dispatch(getProfile())
  }

  return (
    <div>
      <p>Home route</p>
      <p>Hello {name}!</p>
      <button onClick={handleClick}>Change name and get profile</button>

      <Child name="Hi" handleClick={handleClick} />
    </div>
  )
}

export default Home
