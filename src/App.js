import React from 'react'
// Importing Global Styles from Styled Components
import GlobalStyles from './components/GlobalStyles';
// Importing Pages
import AboutUs from './pages/AboutUs';

function App() {
  // The rendering section
  return (
    <div className="App">
      <GlobalStyles />
      <AboutUs />
    </div>
  )
}

export default App;

