import { useRouter } from "next/router";
import { useContext, useRef } from "react"
import { v4 as uuid } from 'uuid';
import { DispatchContext, TodoContext } from "../Contexts/todo.context";

export default function TodoForm(props) {
  const dispatch = useContext(DispatchContext);
  const router = useRouter();
  const formRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const bodyRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredBody = bodyRef.current.value;

    const todoTag = {
      id: uuid(),
      title: enteredTitle,
      email: enteredEmail,
      body: enteredBody,
    }

    dispatch({ type: 'ADD', todo: todoTag });
    formRef.current.reset();
    router.push('/todo-list');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label htmlFor="title">Title</label>
          <input type='text' ref={titleRef} required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type='text' ref={emailRef} required />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input type='text' ref={bodyRef} required />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}