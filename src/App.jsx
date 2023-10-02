import "./styles.css"

export default function App(){
  return <form className="Home">
    <h1>Hello!</h1>
    <div>Im Kaytlen, and this feels cringe!</div>
    <img className="logo" />
    <Clicky />
    <AboutPage />
  </form>
} 

function Clicky() {
  return <button>button clicky click</button>
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </> //component can’t return multiple JSX tags, have to wrap them into a shared parent tag like this, or a <div>...</div>
  );
}