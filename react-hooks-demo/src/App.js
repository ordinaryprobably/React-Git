import { useEffect, useState } from "react"
import useInputHook from "./hooks/useInputHook";
import useToggle from "./hooks/useToggle";

export default function App() {
  const [count, setCount] = useState(0);
  const [isHappy, toggleisHappy] = useToggle(true);
  const [isBanana, toggleisBanana] = useToggle(false);
  const [nickname, updateNickname, resetNickname] = useInputHook('');
  const [age, updateAge, resetAge] = useInputHook('');

  useEffect(() => {
    setCount(count + 1);
  }, [nickname])

  const resetAll = () => {
    resetNickname();
    resetAge();
  }

  return (
    <div>
      <h5>Nickname: {nickname}<br/> Age: {age}</h5>
      <input type='text' value={nickname} onChange={updateNickname} />
      <input type='text' value={age} onChange={updateAge} />
      <button onClick={resetAll}>RESET ALL</button>
      <h1 onClick={() => setCount(count + 1)}>hihi {count}</h1>
      <h1 onClick={toggleisHappy}>{isHappy ? 'I am happy' : 'I am sad'}</h1>
      <h1 onClick={toggleisBanana}>{!isBanana ? 'I am not banana' : 'I am banana'}</h1>
    </div>
  )
}
