import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Copyright from './components/Copyright';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Portfolio />
      <Projects />
      <Contact />
      <Copyright />
      <GlobalStyles />
    </div>
  );
}

export default App;
