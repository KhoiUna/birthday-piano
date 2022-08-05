import type { VercelRequest, VercelResponse } from "@vercel/node";

export default (req: VercelRequest, res: VercelResponse) => {
  // TODO: save to database
  if (req.method === "POST") {
    res.status(200).json({ success: true, error: false });
  }
};
