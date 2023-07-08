import React from "react";
import "./App.css";
import Header from "./components/Header";
import Topfold from "./components/Topfold";
import TrendingNFTs from "./components/TrendingNFTs";
import Footer from "./components/Footer";
import "./components/styles.css";


export default function App() {
  return (
    <div className="max-width">
      <Header />
      <Topfold />
      <TrendingNFTs />
      <Footer />
    </div>
  );
}
