import '../Styles/HomePageStyle.css';

import { Link, Route, Routes } from 'react-router-dom'
import React, { useState } from "react";

import NavBar from "../NavBar";
import About from "./About";
import Art from "./Art";
import Funny from "./Funny";

//npm run dev -- start
//ctrl + c on terminal -- stop

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Screens/About" element={<About />} />
        <Route path="/Screens/Art" element={<Art />} />
        <Route path="/Screens/Funny" element={<Funny />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

import { me } from "./About";

function Home() {
  // hooks can only be used in functions, not classes
  var [slideOne, setSlideOne] = useState('slide');
  var [slideTwo, setSlideTwo] = useState('slide hidden');

  function ChangeToSlideTwo() {
    setSlideOne(prev => prev = 'slide slide-left-onscreen')
    setSlideTwo(prev => prev = 'slide slide-right-offscreen')
  }

  function ChangeToSlideOne() {
    setSlideOne(prev => prev = 'slide slide-left-offscreen')
    setSlideTwo(prev => prev = 'slide slide-right-onscreen')
  }

  return (
    <div>
      <div className={slideOne}>
        <h1 className='home-welcome-title'>Hello!</h1>
          <p className='home-welcome-message'>
            I'm not entirely sure what you put on portfolio websites tbh, but my name is {me.FirstName}.
            I do software engineering unfortunately, as well as doing art sometimes. 
            I also enjoy stupid things because I suffer from a tragic case of brain rot.
          </p>
          <button className='slide-change-button' onClick={ChangeToSlideTwo}>&gt;</button>
      </div>
      <div className={slideTwo}>
        <p>
          Check out some more interesting things here.
        </p>
        <ul>
          <Link to='/'>About</Link>
          <Link to='/'>Art</Link>
          <Link to='/'>Funny</Link>
        </ul>
        <button className='slide-change-button' onClick={ChangeToSlideOne}>&lt;</button>
      </div>
    </div>
  )
}


function NotFound() {
  return (
    <>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </>
  );
}