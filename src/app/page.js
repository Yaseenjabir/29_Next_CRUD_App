import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/product">Go to Product List</Link>
      <Link href="addproduct">Add Product</Link>
    </>
  );
}
