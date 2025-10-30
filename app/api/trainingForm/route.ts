import { connectToDatabase } from "@/app/lib/dbConnect";
import Training from "@/app/models/trainingSchema";
// import signUp from "@/app/models/signUpForm";
import { handleError } from "@/app/utils/errorHandler";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const data = await req.json();
    const newForm = await Training.create(data);

    return NextResponse.json({
      success: true,
      message: "Training Application submitted successfully!",
      form: newForm,
    });
  } catch (error: any) {
    const handled = handleError(error);

    // ✅ Always return a JSON response (no crashes)
    return NextResponse.json(
      {
        success: false,
        message: handled.message,
        details: handled.details || null,
      },
      { status: handled.status }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const forms = await Training.find();
    return NextResponse.json({ success: true, forms });
  } catch (error: any) {
    const handled = handleError(error);
    return NextResponse.json(
      {
        success: false,
        message: handled.message,
        details: handled.details || null,
      },
      { status: handled.status }
    );
  }
}
