import type { VercelRequest, VercelResponse } from "@vercel/node";
import client from "../../db/client";

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "POST") {
    const sql =
      "INSERT INTO wish (from_user, to_user, email, date_of_birth, wish_text, image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, from_user, to_user;";
    const response = await client.query(sql, [
      req.body["from-user"],
      req.body["to-user"],
      req.body.email,
      new Date(req.body["date-of-birth"]),
      req.body.wish,
      req.body["image-url"],
    ]);

    console.log(response);
    if (!response.rowCount) {
      res.status(500).json({
        success: false,
        error: "Error saving wish",
      });
    }

    return res.status(200).json({
      success: {
        id: response.rows[0].id,
        from_user: response.rows[0].from_user,
        to_user: response.rows[0].to_user,
      },
      error: false,
    });
  }

  return res.status(403).json({
    success: false,
    error: "Method not allowed",
  });
};
