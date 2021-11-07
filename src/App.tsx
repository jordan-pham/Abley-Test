import React from "react";
import Header from "./components/Header";
import MapView from "./components/MapView";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MapView />
      <Footer />
    </div>
  );
}

export default App;
