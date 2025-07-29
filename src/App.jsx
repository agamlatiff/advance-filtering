import React, { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import data from "./db/data";

const App = () => {
  const [selectedCategory, setSelecetedCategory] = useState(null);
  const [query, setQuery] = useState("");
  
  const handleInputChange = event => {
    setQuery(event.target.value)
  }
  
  const filteredItems = data.filter(product =>)
  
  return (
    <>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
};

export default App;
