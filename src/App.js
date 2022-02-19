import logo from "./logo.svg";
import "./App.css";
import { Parallax, Background } from "react-parallax";
import sthlm from "./assets/1093970.jpg";

const Container = () => (
  <Parallax strength={300}>
    <Background className="custom-bg">
      <img src={sthlm} alt="fill murray" />
    </Background>
  </Parallax>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <Container className="Hero" />
      <footer className="Footer"></footer>
    </div>
  );
}

export default App;
