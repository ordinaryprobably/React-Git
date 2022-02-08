import Todo from "./Todo";

export default function TodoList(props) {
  return (
    <div>
      {props.list.map(tag => (
        <Todo tag={tag} />
      ))}
    </div>
  )
}