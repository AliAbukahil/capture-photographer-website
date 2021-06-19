import React from "react";
// Importing Global Styles from Styled Components
import GlobalStyles from "./components/GlobalStyles";
// Importing Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";

function App() {
  // The rendering section
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
