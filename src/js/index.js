//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Navbar from "./component/Navbar.jsx";
import AboutMe from "./component/AboutMe.jsx";
import Experience from "./component/Experience.jsx";
import Projects from "./component/Projects.jsx";
import Technologies from "./component/Technologies.jsx";
import Footer from "./component/Footer.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <Navbar />
    <AboutMe />
    <Experience />
    <Projects />
    <Technologies />
    <Footer />
</React.StrictMode>
);

