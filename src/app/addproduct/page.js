"use client";

import { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");

  async function handleData(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ name, price, color, company }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <div>
        <h1>Add Product</h1>
        <form
          onSubmit={handleData}
          style={{ display: "flex", flexDirection: "column", width: "200px" }}
        >
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter product name"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="Enter product price"
          />
          <input
            onChange={(e) => setColor(e.target.value)}
            type="text"
            placeholder="Enter product color"
          />
          <input
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            placeholder="Enter product company"
          />
          <button type="submit">Submit data</button>
        </form>
      </div>
    </>
  );
};

export default Page;
