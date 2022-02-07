import { useEffect, useRef, useState } from 'react';

export default function Form(props) {
  const inputRef = useRef();
  const [input, setInput] = useState('');
  
  const handleSubmit = event => {
    event.preventDefault();
    setInput(inputRef.current.value);
  }

  return (
    <>
      <h1>{input}</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          ref={inputRef}
        />
      </form>
    </>
  )
}