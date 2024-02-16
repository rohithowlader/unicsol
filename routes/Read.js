import express from "express";
import items from "../models/items.js";

let readitems = express.Router();

readitems.get("/v1.0/items", async (req, res) => {
  try {
    const itemsFind = await items.find({});
    const totalitems = await items.countDocuments().exec();
    if (!itemsFind) {
      return res.status(404).json({ message: "Invalid entry" });
    }

    return res.status(200).json({
      messsage: `items are`,
      itemsFind,
      totalitems,
    });
  } catch (e) {
    console.log(e);
  }
});

export default readitems;
