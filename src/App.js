import React from 'react';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";

function App() {
  return (
      <div>
        <Header />
        <Wrapper>
          <Main />
        </Wrapper>
      </div>
  );
};

export default App;