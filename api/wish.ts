import type { VercelRequest, VercelResponse } from "@vercel/node";
import client from "../db/client";
import { validate } from "uuid";

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "GET") {
    if (!validate(req.query.id as string)) {
      return res.status(400).json({
        success: false,
        error: "No birthday wish found",
      });
    }

    const sql =
      "SELECT from_user, to_user, date_of_birth, image_url, wish_text, allow_to_play_immediately FROM wish WHERE id = $1;";
    const { rows } = await client.query(sql, [req.query.id]);

    if (!rows.length) {
      return res.status(200).json({
        success: false,
        error: "No birthday wish found",
      });
    }

    const {
      from_user,
      to_user,
      date_of_birth,
      image_url,
      wish_text,
      allow_to_play_immediately,
    } = rows[0];

    return res.status(200).json({
      success: {
        from_user,
        to_user,
        date_of_birth,
        image_url,
        wish_text,
        allow_to_play_immediately,
      },
      error: false,
    });
  }

  return res.status(403).json({
    success: false,
    error: "Method not allowed",
  });
};
