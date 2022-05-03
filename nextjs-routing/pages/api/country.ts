import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  city: string;
  country: string;
  region: string;
}

const cache = {
  city: "",
  country: "",
  region: "",
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const country =
    (req.headers["cloudfront-viewer-country"] as string) || cache.country;
  const city = (req.headers["cloudfront-viewer-city"] as string) || cache.city;
  const region =
    (req.headers["cloudfront-viewer-country-region"] as string) || cache.region;

  cache.country = country;
  cache.city = city;
  cache.region = region;

  res.status(200).json({ ...cache });
}
