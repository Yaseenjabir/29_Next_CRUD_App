"use client";

export default function Button(prop) {
  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    data.success
      ? alert("Item Deleted")
      : alert("Something Went Wrong While Deleting Item");
  };

  return (
    <>
      <button onClick={() => handleDelete(prop.id)}>Delete</button>
    </>
  );
}
