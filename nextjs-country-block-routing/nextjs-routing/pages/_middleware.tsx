import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req;

  if (!geo) {
    return NextResponse.rewrite(url);
  }

  const country = geo.country || "";
  const city = geo.city || "";
  const region = geo.region || "";

  url.searchParams.set("country", country);
  url.searchParams.set("city", city);
  url.searchParams.set("region", region);

  return NextResponse.rewrite(url);
}
