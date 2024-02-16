import express from "express";
import items from "../models/items.js";

let deleteItems = express.Router();

deleteItems.delete("/v1.0/items", async (req, res) => {
  try {
    let { uuid } = req.body;

    const itemFind = await items.findOne({
      uuid: uuid,
    });

    if (!itemFind) {
      return res.status(404).json({ message: "Invalid entry" });
    }

    const deleteEntry = await items.findOneAndDelete({
      uuid: uuid,
    });

    return res.status(200).json({
      messsage: `Entry Deleted`,
    });
  } catch (e) {
    console.log(e);
  }
});

export default deleteItems;
