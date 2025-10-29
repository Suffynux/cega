// import { connectToDatabase } from "@/app/lib/dbConnect";
// import signUp from "@/app/models/signUpForm";
// import { NextResponse } from "next/server";



// export async function POST(req: Request) {
//   await connectToDatabase();
//   const data = await req.json();
//   const newForm = await signUp.create(data);
//   return NextResponse.json({ success: true, form: newForm });
// }

// export async function GET() {
//   await connectToDatabase();
//   const forms = await signUp.find();
//   return NextResponse.json({ success: true, forms });
// }


import { connectToDatabase } from "@/app/lib/dbConnect";
import signUp from "@/app/models/signUpForm";
import { handleError } from "@/app/utils/errorHandler";
import { NextResponse } from "next/server";
// import { handleError } from "@/app/utils/handleError"; // adjust path if needed

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const data = await req.json();

    const newForm = await signUp.create(data);

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully!",
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
    const forms = await signUp.find();
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
