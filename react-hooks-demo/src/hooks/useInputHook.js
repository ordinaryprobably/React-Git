import { useState } from "react"

export default initialValue => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const resetValue = () => {
    setValue('');
  }

  return [value, handleChange, resetValue];
}