import Link from "next/link";
import Button from "../../../components/button";

async function getData() {
  let response = await fetch("http://localhost:3000/api/products");
  response = await response.json();
  console.log(response);
  return response;
}

const Page = async () => {
  const ans = await getData();

  return (
    <>
      <h1>Hello world</h1>
      <div>
        {ans.map((item) => (
          <>
            <div style={{ border: "1px solid red", margin: "20px 0px" }}>
              <h3>Name : {item.name}</h3>
              <h3>Color : {item.color}</h3>
              <h3>Company :{item.company}</h3>
              <h3>Price : {item.price}</h3>
              <Link href={`/product/${item._id}`}>Update</Link>
              <Button id={item._id} />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Page;
