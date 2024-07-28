import { dbreference } from "@/library/db";
import { Product } from "@/library/model/schema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(dbreference);

  const data = await Product.find();

  return NextResponse.json(data, { status: 200 });
}

export async function POST(request) {
  const payload = await request.json();

  await mongoose.connect(dbreference);
  const product = new Product(payload);

  await product.save();
  return NextResponse.json({ result: true });
}
