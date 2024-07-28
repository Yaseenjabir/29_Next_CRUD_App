"use client";

import { useEffect, useState } from "react";
const Page = ({ params }) => {
  const id = params.placeholder;

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");

  const handleData = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, price, color, company }),
    });
    const data = await response.json();
    if (data == "Item updated") {
      alert("Data Updated");
      setName("");
      setPrice("");
      setColor("");
      setCompany("");
    } else {
      alert("Something went wrong while uploading data");
    }
  };

  const fetchSingleProductData = async () => {
    const response = await fetch(`http://localhost:3000/api/products/${id}`);
    const data = await response.json();
    setName(data.name);
    setPrice(data.price);
    setColor(data.color);
    setCompany(data.company);
  };

  useEffect(() => {
    fetchSingleProductData();
  }, []);

  return (
    <>
      <div>
        <h1>Single Product Details</h1>
        <form
          onSubmit={handleData}
          style={{ display: "flex", flexDirection: "column", width: "200px" }}
        >
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter product name"
            value={name}
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="Enter product price"
            value={price}
          />

          <input
            onChange={(e) => setColor(e.target.value)}
            type="text"
            placeholder="Enter product color"
            value={color}
          />
          <input
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            placeholder="Enter product company"
            value={company}
          />
          <button type="submit">Submit data</button>
        </form>
      </div>
    </>
  );
};
export default Page;
