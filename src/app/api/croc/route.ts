import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return NextResponse.json({
    name: "Croc",
    symbol: "Croc",
    description: "This is croc devnet token",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2143765181/display_1500/stock-vector-cool-cartoon-crocodile-with-sunglasses-vector-illustration-2143765181.jpg",
  });
}
