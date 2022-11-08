import React from 'react';

import GlobalStyle from './components/GlobalStyles';

import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail.js';
import Nav from './components/Nav';
//Router
import { Route, Switch, useLocation } from 'react-router-dom';
// Framer motion // Animation
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />

      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;

// React V6
/*
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <Routes>
        <Route exact path="/" element={<AboutUs />} />

        <Route exact path="/work" element={<OurWork />} />

        <Route exact path="/work/:id" element={<MovieDetail />} />

        <Route exact path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}
*/
