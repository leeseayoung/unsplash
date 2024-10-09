import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  margin: 20px;
`;

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: gray;
  }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            + {count}
          </button>
          <button onClick={() => setCount((count) => count - 1)}>
            - {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <Nav>
          <StyledLink
            href="https://www.naver.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Naver
          </StyledLink>
        </Nav>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </Router>
  );
}

function Home() {
  return <h2>Welcome to the Home Page</h2>;
}

export default App;
