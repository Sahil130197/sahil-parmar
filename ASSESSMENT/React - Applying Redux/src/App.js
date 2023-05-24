import React, { useState } from "react";
import "./App.css"

const SearchFilter = () => {
  // Step 1: Declare React state for search input value
  const [searchTerm, setSearchTerm] = useState("");

  // Step 2: Update state on input change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Sample list of items to be filtered
  const items = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Pineapple",
    "Watermelon",
  ];

  // Step 3: Filter items based on search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <input className="inp"
        type="text"
        placeholder="Search Fruits..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul className="list-style">
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
