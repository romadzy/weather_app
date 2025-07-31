import { NextRequest, NextResponse } from "next/server";
import { API_KEY } from "@/constants";

export async function GET(req: NextRequest) {
  const city = req.nextUrl.searchParams.get("city");
  const unit = req.nextUrl.searchParams.get("unit") || "metric";
  if (!city) return NextResponse.json({ error: "No city" }, { status: 400 });

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=${unit}&appid=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return NextResponse.json(data);
}