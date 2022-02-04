import { useState } from "react"
import useToggle from "./hooks/useToggle";

export default function App() {
  const [count, setCount] = useState(0);
  const [isHappy, toggleisHappy] = useToggle(true);
  const [isBanana, toggleisBanana] = useToggle(false);

  return (
    <div>
      <h1 onClick={() => setCount(count + 1)}>hihi {count}</h1>
      <h1 onClick={toggleisHappy}>{isHappy ? 'I am happy' : 'I am sad'}</h1>
      <h1 onClick={toggleisBanana}>{!isBanana ? 'I am not banana' : 'I am banana'}</h1>
    </div>
  )
}
