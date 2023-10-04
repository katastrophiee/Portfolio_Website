import React from "react";
import { useState } from 'react'; //built in hook from React

var clicked = false;

export default function Lol() {
  const [count, setCount] = useState(0);

  function handleClick(event) {
    event.preventDefault();
    setCount(count + 1);
  }
  
  return (
    <div className="Home">
      <h1>Hello!</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <div>
    {clicked //CAN USE TERNARY OPERATOR !!!
      ? <h1>Clicked</h1> 
      : <h1>Not Clicked</h1>}
    </div>

{/* If the else on the ternary operator is not needed, you can use && instead */}
{/* {clicked && <h1>Clicked</h1>} can be replaced with component, e.g <Clicky /> */}

<ShoppingList />

    <div>
      <h2>Seperately updating buttons </h2>
    <IndividualButton /> {/* same component multiple times, each will get its own state and will NOT share values*/}
    <IndividualButton />
    </div>

    <div>
      <h2>Counters that update together</h2>
      <JointButton count={count} onClick={handleClick} />
      <JointButton count={count} onClick={handleClick} />
    </div>

        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function IndividualButton() {
  const [count, setCount] = useState(0); 

  function handleClick(event) {
    event.preventDefault();
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function JointButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function ShoppingList() {
  return (
    <ul>
      {products.map(product => (
        <li 
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}>
          {product.title}
        </li>
      ))}
    </ul>
  );
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];