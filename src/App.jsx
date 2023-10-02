import "./styles.css"
import { useState } from 'react'; //built in hook from React

import HomePage from "./src/Lol.jsx";

//npm run dev

const me = {
  FirstName: 'Kaytlen',
  LastName: 'Tommis-birkett',
  UserProfilePic: 'src/Assets/Images/cat_transparent.png',
  UserProfilePicSize: 90,
};

var clicked = false;

export default function App(){
  
  const [count, setCount] = useState(0);

  function handleClick(event) {
    event.preventDefault();
    setCount(count + 1);
  }

  return <form className="Home">
    <h1>Hello!</h1>
    <div>Im {me.FirstName}, and this feels cringe!</div>
    <div>This is a bunch of absolute shit bc im tryna learn, real page here ---&gt;</div> {/* the stupid > symbol is reserved, soooo &gt; instead for some reason */}
    <img className="logo" />
    <Clicky />
    <AboutPage />
    <h1>{me.FirstName}</h1>
    <img 
      className="logo"
      src={me.UserProfilePic} 
      alt={'Photo of ' + me.FirstName + ' ' + me.LastName} 
      style={{
        width: me.UserProfilePicSize,
        height: me.UserProfilePicSize
      }}
    />

    <div>
    {clicked //CAN USE TERNARY OPERATOR !!!
      ? <h1>Clicked</h1> 
      : <h1>Not Clicked</h1>}
    </div>

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

{/* If the else on the ternary operator is not needed, you can use && instead */}
{/* {clicked && <h1>Clicked</h1>} can be replaced with component, e.g <Clicky /> */}

    <ShoppingList />
  </form>
} 

function Clicky() {
  function handleClick() {
    alert('You smell!');
  }

  return <button onClick={handleClick}>button clicky click</button>
  
} //called a component, html but reuseable :)
//reusable, self-contained pieces of code that encapsulate a specific piece of functionality and user interface elements
// there are functional and class components, this is a functional component

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

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </> //component can’t return multiple JSX tags, have to wrap them into a shared parent tag like this, or a <div>...</div>
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

function NavButton(url){

}
