import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "POST") {
    const { token } = req.body;

    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        method: "POST",
      }
    );

    res
      .status(200)
      .json({ success: { score: response.data.score }, error: !response.data });
  }
};
