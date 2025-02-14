import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function DELETE(request, context) {
  try {
    await connectDB();
    const singleItem = await ItemModel.findById(context.params.id);
    if (singleItem.email === reqBody.email) {
      await ItemModel.deleteOne({ _id: context.params.id });
      return NextResponse.json({ message: "アイテム削除成功" });
    } else {
      return NextResponse.json({ message: "ほかの人が作成したアイテムです" });
    }
  } catch {
    return NextResponse.json({ message: "アイテム削除失敗" });
  }
}
