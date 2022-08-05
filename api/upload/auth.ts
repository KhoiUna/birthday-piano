import type { VercelRequest, VercelResponse } from "@vercel/node";
import ImageKit from "imagekit";

export default (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "GET") {
    const imagekit = new ImageKit({
      publicKey: process.env.VITE_IMAGEKIT_PUBLIC_KEY,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint: process.env.VITE_IMAGEKIT_URL_ENDPOINT,
    });

    res.send(imagekit.getAuthenticationParameters());
  }
};
