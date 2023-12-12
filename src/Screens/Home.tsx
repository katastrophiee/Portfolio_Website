import '../Styles/HomePageStyle.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Link, Route, Routes } from 'react-router-dom'
import React, { useEffect, useState } from "react";

import NavBar from "../NavBar";
import About from "./AboutPage/About";
import Art from "./Art";
import Funny from "./Funny";

import { me } from "./AboutPage/About";
import { CenteredDiv, CenteredHeader, StyledCenteredParagraph, StyledUL } from './StyledComponents';

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

function Home() {
  // hooks can only be used in functions, not classes
  const [slideOne, setSlideOne] = useState('slide');
  const [slideTwo, setSlideTwo] = useState('slide hidden');

  const [slideToLeft, setSlideToLeft] = useState(false);
  const [slideToRight, setSlideToRight] = useState(false);

  useEffect(() => {
    if (slideToLeft) {
      ChangeToSlideTwo();
      setSlideToLeft(false);
    }
    else {

    }
  } , [slideToLeft]);

  function ChangeToSlideTwo() {
    setSlideOne(prev => prev = 'slide slide-left-onscreen')
    setSlideTwo(prev => prev = 'slide slide-right-offscreen')
  }

  function ChangeToSlideOne() {
    setSlideOne(prev => prev = 'slide slide-left-offscreen')
    setSlideTwo(prev => prev = 'slide slide-right-onscreen')
  }

  return (
    <>
      <CenteredDiv>
          <CenteredHeader>Hello!</CenteredHeader>
            <StyledCenteredParagraph>
              I'm not entirely sure what you put on portfolio websites tbh, but my name is {me.FirstName}.
              I do software engineering unfortunately, as well as doing art sometimes. 
              I also enjoy playing games and I aspire to be a silly cat.
            </StyledCenteredParagraph>
            <button className='slide-change-button' onClick={ChangeToSlideTwo}>&gt;</button>
        </CenteredDiv>
        <CenteredDiv>
          <StyledCenteredParagraph>Check out some more interesting things here.</StyledCenteredParagraph>
            <StyledUL>
              <Link to='/Screens/About'>About</Link>
              <Link to='/Screens/Art'>Art</Link>
              <Link to='/Screens/Funny'>Funny</Link>
            </StyledUL>
          <StyledCenteredParagraph>Enjoy this cat picture, because I'm not really sure what else to put here.</StyledCenteredParagraph>
          <img className='borgir-cat' src="src\Assets\Screenshot_20231005_180441_Instagram.jpg" alt="Borgir Cat"/>
          <button 
            style={{opacity: 100, animation: 'none'}} 
            className='slide-change-button' 
            onClick={() => this.setState({ fade: true })}
            onAnimationEnd={() => this.setState({ fade: false })}>
              &lt;
            </button>
        </CenteredDiv>
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