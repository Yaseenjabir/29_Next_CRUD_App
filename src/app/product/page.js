import Link from "next/link";
import Button from "../../../components/button";

async function getData() {
  const apiUrl = process.env.API_URL;
  let response = await fetch(`${apiUrl}/api/products`);
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
          <div
            key={item._id}
            style={{ border: "1px solid red", margin: "20px 0px" }}
          >
            <h3>Name : {item.name}</h3>
            <h3>Color : {item.color}</h3>
            <h3>Company : {item.company}</h3>
            <h3>Price : {item.price}</h3>
            <Link href={`/product/${item._id}`}>Update</Link>
            <Button id={item._id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
