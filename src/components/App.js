import React from "react";

import Header from './Header'
import About from './About'
import Project from './projects/Project'
import Work from "./Work";
import Contact from "./Contact";
import Blog from "./Blog";
import Footer from "./Footer";

const App = () => {

  return (
     <main>
        <Header />
        <About />
        <Project />
        <Work />
        <Blog />
        <Contact />
        <Footer />
     </main>
  )
}

export default App; 