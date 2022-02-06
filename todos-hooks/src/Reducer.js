import { useReducer } from "react"

const CONDITION = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
}

function countReducer(state, action) {
  switch(action) {
    case 'INCREMENT': 
      return { num: state.num + 1 };
    case 'DECREMENT':
      return { num: state.num - 1 };
    case 'RESET':
      return { num: 0 };
  }
}

export default function Reducer() {
  const [state, dispatch] = useReducer(countReducer, { num: 0 });

  return (
    <div>
      <h1>{state.num}</h1>
      <button onClick={() => dispatch(CONDITION.INCREMENT)}>ADD</button>
      <button onClick={() => dispatch(CONDITION.DECREMENT)}>SUBTRACT</button>
      <button onClick={() => dispatch(CONDITION.RESET)}>RESET</button>
    </div>
  )
}