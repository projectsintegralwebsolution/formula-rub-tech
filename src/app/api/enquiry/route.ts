import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      fullName,
      companyName,
      email,
      contactNumber,
      productCategory,
      materialRequirement,
      message,
    } = data;

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid business email address." },
        { status: 400 }
      );
    }

    if (!contactNumber || typeof contactNumber !== "string" || contactNumber.trim().length < 8) {
      return NextResponse.json(
        { error: "Please provide a valid contact telephone number." },
        { status: 400 }
      );
    }

    // Process valid inquiry (in real production, this forwards to company email / CRM)
    console.log("[Formula Rub Tech Enquiry Received]:", {
      timestamp: new Date().toISOString(),
      fullName,
      companyName: companyName || "N/A",
      email,
      contactNumber,
      productCategory: productCategory || "General Inquiry",
      materialRequirement: materialRequirement || "Standard Specification",
      message: message || "No additional comments",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your technical enquiry has been registered successfully with Formula Rub Tech. Our engineering desk will review your requirements and reach out within 24 business hours.",
        receivedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Enquiry API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please call us directly." },
      { status: 500 }
    );
  }
}
