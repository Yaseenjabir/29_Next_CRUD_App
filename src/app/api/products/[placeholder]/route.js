import { dbreference } from "@/library/db";
import { Product } from "@/library/model/schema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const payload = await request.json();
  const productID = params.placeholder;
  const filter = { _id: productID };

  await mongoose.connect(dbreference);
  await Product.findOneAndUpdate(filter, payload);
  return NextResponse.json("Item updated");
}

export async function GET(req, { params }) {
  const paramsID = params.placeholder;
  await mongoose.connect(dbreference);
  const data = await Product.find();
  const filter = data.filter((item) => item._id == paramsID);
  return NextResponse.json(filter[0]);
}

export async function DELETE(req, { params }) {
  try {
    const productID = params.placeholder;
    const record = { _id: productID };

    if (!mongoose.Types.ObjectId.isValid(productID)) {
      return NextResponse.json(
        {
          success: false,
          message: "This ID is invalid",
        },
        { status: 500 }
      );
    }

    await mongoose.connect(dbreference);

    const result = await Product.deleteOne(record);

    if (result.deletedCount === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No document found with the given ID",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Item deleted" },
      { success: 200 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, message: error });
  }
}
