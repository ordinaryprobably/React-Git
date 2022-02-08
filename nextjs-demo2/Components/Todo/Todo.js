import Link from "next/link";

export default function Todo({ tag }) {
  return (
    <div>
      <Link href={`/todo-list/todo/${tag.id}`}>
        <h3>{tag.title}</h3>
      </Link>
      <p>{tag.email} - {tag.id}</p>
      <p>{tag.body}</p>
      <hr />
    </div>
  )
}