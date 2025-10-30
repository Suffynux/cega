import { connectToDatabase } from "@/app/lib/dbConnect";
import Campaign from "@/app/models/campaignForm";
import { handleError } from "@/app/utils/errorHandler";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const data = await req.json();
    const compaignForm = await Campaign.create(data);

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully!",
      form: compaignForm,
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
    const forms = await Campaign.find();
    return NextResponse.json({
      success: true,
      forms,
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
