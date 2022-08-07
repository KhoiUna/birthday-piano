import type { VercelRequest, VercelResponse } from "@vercel/node";
import client from "../db/client";

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "GET") {
    const sql =
      "SELECT from_user, to_user, date_of_birth, image_url, wish_text FROM wish WHERE id = $1;";
    const { rows } = await client.query(sql, [req.query.id]);

    if (!rows.length) {
      return res.status(200).json({
        success: false,
        error: "No birthday wish found",
      });
    }

    const { from_user, to_user, date_of_birth, image_url, wish_text } = rows[0];

    return res.status(200).json({
      success: {
        from_user,
        to_user,
        date_of_birth,
        image_url,
        wish_text,
      },
      error: false,
    });
  }

  return res.status(403).json({
    success: false,
    error: "Method not allowed",
  });
};