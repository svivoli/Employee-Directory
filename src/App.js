import React from 'react';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
      <div>
        <Header />
        <Wrapper>
          <Main />
        </Wrapper>
        <Footer />
      </div>
  );
};

export default App;