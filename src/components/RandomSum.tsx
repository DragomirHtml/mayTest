import { useState } from 'react';
import currency from 'currency.js';

export function RandomSum() {
  const [text, setText] = useState('');

  const onInputChange = (event) => {
    const userNumber = parseFloat(event.target.value);
    const randomNumber = Math.random();
    const total = userNumber + randomNumber;
    console.log(currency(total).toString());
    setText(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        value={text}
        onChange={onInputChange}
        placeholder="Введи число"
      />
      <p>Введено: {text}</p>
    </div>
  );
}
