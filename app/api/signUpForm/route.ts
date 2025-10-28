import { connectToDatabase } from "@/app/lib/dbConnect";
import signUp from "@/app/models/signUpForm";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
  await connectToDatabase();
  const data = await req.json();
  const newForm = await signUp.create(data);
  return NextResponse.json({ success: true, form: newForm });
}

export async function GET() {
  await connectToDatabase();
  const forms = await signUp.find();
  return NextResponse.json({ success: true, forms });
}
