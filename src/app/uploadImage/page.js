"use client";

import { useState } from "react";

const Page = () => {
  const [file, setFile] = useState();

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("file", file);
    const response = await fetch("http://localhost:3000/api/images", {
      method: "POST",
      body: data,
    });
    const recievedData = await response.json();

    recievedData.status === "ok"
      ? alert("Image Uploaded")
      : alert("Something went wrong");
  };
  return (
    <div>
      <h1>Click to upload image</h1>
      <form onSubmit={handleImageUpload}>
        <input
          onChange={(e) => setFile(e.target.files?.[0])}
          type="file"
          name="Photo"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Page;
