import React from "react"

interface Props {
  name: string
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Child: React.FC<Props> = ({ name, handleClick }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e.currentTarget)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Child {name}</p>
      <button type="submit" onClick={handleClick}>
        submit form
      </button>
    </form>
  )
}

export default Child
