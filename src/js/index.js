//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Navbar from "./component/Navbar.jsx";
import Jumbotron from "./component/Jumbotron.jsx";
import CardsSection from "./component/CardsSection.jsx";
import Footer from "./component/Footer.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <Navbar />
    <Jumbotron />
    <CardsSection />
    <Footer />
</React.StrictMode>
);

