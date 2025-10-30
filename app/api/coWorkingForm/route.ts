import { connectToDatabase } from "@/app/lib/dbConnect";
import coWorking from "@/app/models/coWorkingSchema";
import { handleError } from "@/app/utils/errorHandler";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const data = req.json();
    const coWorkingForm = await coWorking.create(data);

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully!",
      form: coWorkingForm,
    });
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

export async function GET() {
  try {
    await connectToDatabase();
    const coWorkingForms = await coWorking.find();
    return NextResponse.json({
      success: true,
      forms: coWorkingForms,
    });
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
