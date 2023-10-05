import '../Styles/HomePageStyle.css';
import React from "react";
import NavBar from "../NavBar";
import About from "./About";
import Art from "./Art";
import Funny from "./Funny";
import { Route, Routes } from 'react-router-dom'

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
  return (
    <>
      <div className='square'>
        <h1 className='welcome-title'>Hello!</h1>
          <div className='welcome-message'>
            I'm not entirely sure what you put on portfolio websites tbh, but my name is {me.FirstName}.
            I do software engineering unfortunately, as well as doing art sometimes. I enjoy all things that are stupid and silly.
          </div>
      </div>
    </>
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