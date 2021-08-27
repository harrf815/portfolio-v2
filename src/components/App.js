import React from "react";

import Header from './Header'
import About from './About'
import Project from './projects/Project'
import Work from "./Work";
import Contact from "./Contact";

const App = () => {

  return (
     <main>
        <Header />
        <About />
        <Project />
        <Work />
        <Contact />
     </main>
  )
}

export default App; 