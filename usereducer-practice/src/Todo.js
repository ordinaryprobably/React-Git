import { memo } from "react"

function Todo(props) {
  return (
    <p>{props.task}</p>
  )
}

export default memo(Todo);