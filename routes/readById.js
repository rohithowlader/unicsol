import express from "express";
import items from "../models/items.js";

let readByIditems = express.Router();

readByIditems.get("/v1.0/itemsByid", async (req, res) => {
  try {
    let { uuid } = req.body;
    const itemsFind = await items.find({ uuid: uuid });

    if (!itemsFind) {
      return res.status(404).json({ message: "Invalid entry" });
    }

    return res.status(200).json({
      messsage: `items are`,
      itemsFind,
    });
  } catch (e) {
    console.log(e);
  }
});

export default readByIditems;
