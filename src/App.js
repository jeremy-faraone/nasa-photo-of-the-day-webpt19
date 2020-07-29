import React from "react";
import "./App.css";
import PictureList from "./PictureList";
import styled from "styled-components";

const NasaDay = styled.header`
  font-size: 40px;
  color: blue;
  text-shadow: 2px 2px red;
  padding-bottom: 6px;
`;

function App() {
  return (
    <div className="App">
      <NasaDay>
        Nasa's Photo Of The Day{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
      </NasaDay>
      <br />
      <PictureList />
    </div>
  );
}

export default App;
