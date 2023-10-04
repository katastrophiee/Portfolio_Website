import "./Styles/HomePageStyle.css";
import React from "react";
import NavBar from "./NavBar";
import About from "./Screens/About";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//npm run dev -- start
//ctrl + c on terminal -- stop

const me = {
  FirstName: 'Kaytlen',
  LastName: 'Tommis-birkett',
  UserProfilePic: 'src/Assets/cat_transparent.png',
  UserProfilePicSize: 90,
};

function App(){


  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Screens/About" element={<About />} />
      </Routes>
    </>
  );
} 

function Clicky() {
  function handleClick() {
    alert('You smell!');
  }

  return <button onClick={handleClick}>button clicky click</button>
  
} //called a component, html but reuseable :)
//reusable, self-contained pieces of code that encapsulate a specific piece of functionality and user interface elements
// there are functional and class components, this is a functional component

function NavigationButton({ url }) {

  function handleClick() {
    history.pushState(null, null, url);
  }

  return <button onClick={handleClick}>Go to {url}</button>
}

function Before(){
  return (
    <>
      <form className="Home">
        
        <h1>Hello!</h1>

        <div>Im {me.FirstName}, and this feels cringe!</div>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>This is a bunch of absolute shit because I'm trying to learn, real page here ---&gt;</div>
          <NavigationButton url={"src/Screens/Lol.jsx"} />
        </div>

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

      </form>
    </>
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

export default App