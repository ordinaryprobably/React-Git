import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="Navbar">
      <button onClick={router.back}>Back</button>
      <Link href='/'>Home</Link>
      <Link href='/todo-list'>Todo List</Link>
      <Link href='/todo-form'>Form</Link>
    </div>
  )
}