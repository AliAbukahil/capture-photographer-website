import React from "react";
// Importing Global Styles from Styled Components
import GlobalStyles from "./components/GlobalStyles";
// Importing Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
// importing Router
import { Switch, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  // The rendering section
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route>
            <MovieDetail path="/work/:id" />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
