import items from "../models/items.js";
import express from "express";
import { v4 as uuidv4 } from "uuid";
let createItem = express.Router();

createItem.post("/v1.0/items/", async (req, res) => {
  try {
    let { Name } = req.body;

    const itemsFind = await items.findOne({ Name: Name });

    //NimapInfotech
    if (itemsFind) {
      return res.status(409).json({ message: `${Name} Already Present` });
    }
    if (!itemsFind) {
      let uuidGenerate = uuidv4();
      const item = new items({
        Name,
        uuid: uuidGenerate,
        Description: req.body.Description,
        date: Date.now(),
      });
      const response = await item.save();
      return res.status(200).json({
        messsage: `item ${item.Name} Created`,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

export default createItem;
