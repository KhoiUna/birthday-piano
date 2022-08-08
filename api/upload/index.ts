import type { VercelRequest, VercelResponse } from "@vercel/node";
import client from "../../db/client";

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "POST") {
    const fromUser = req.body["from-user"];
    const toUser = req.body["to-user"];
    const email = req.body.email;
    const dateOfBirth = req.body["date-of-birth"];
    const allowToPlayImmediately = req.body["allow-to-play-immediately"];
    const wishText = req.body.wish;
    const imageUrl = req.body["image-url"];

    if (
      fromUser.trim() === "" ||
      toUser.trim() === "" ||
      email.trim() === "" ||
      allowToPlayImmediately === "" ||
      wishText.trim() === "" ||
      imageUrl === ""
    )
      return res.status(400).send("Please fill out all fields");

    if (fromUser.length > 45 || toUser.length > 45)
      return res.status(400).send("Username can only contain 45 characters");

    if (wishText.length > 100)
      return res.status(400).send("Wish text can only contain 100 characters");

    const sql =
      "INSERT INTO wish (from_user, to_user, email, date_of_birth, wish_text, image_url, allow_to_play_immediately) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id, from_user, to_user;";
    const response = await client.query(sql, [
      fromUser,
      toUser,
      email,
      dateOfBirth ? new Date(dateOfBirth) : null,
      wishText,
      imageUrl,
      allowToPlayImmediately === "yes" ? true : false,
    ]);

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
