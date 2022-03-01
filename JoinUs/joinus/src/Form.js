import { useState } from 'react';

export default function Form() {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    });

    const data = await response.json();

    console.log(data)

    setEmail('');
  }

  return (
    <div>
      <span>{email}</span>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='email'
          id='email'
          value={email}
          onChange={handleChange}
        />
        <button>Submit to join!</button>
      </form>
    </div>
  )
}