// import url from 'url';
import express from "express";
import items from "../models/items.js";

let updateItems = express.Router();

updateItems.put("/v1.0/items", async (req, res) => {
  try {
    let { uuid, newItemName } = req.body;
    if (!newItemName) {
      return res.status(404).json({ message: "Invalid entry" });
    }

    //     const categoryFind = await category.findOne({
    //       categoryName: newCategoryName,
    //     });

    //     if (categoryFind) {
    //       return res
    //         .status(404)
    //         .json({ message: "New Entered Changes already Present as Entry" });
    // }
    const newItemFind = await items.findOne({
      uuid: uuid,
    });

    if (!newItemFind) {
      return res.status(404).json({ message: "Invalid entry" });
    }

    const filter = {
      uuid: uuid,
    };
    const update = {
      Name: newItemName,
    };

    let doc = await items.findOneAndUpdate(filter, update);
    return res.status(200).json({
      messsage: `Updated entry. Changed ${newItemFind.Name} to ${newItemName}`,
    });
  } catch (e) {
    console.log(e);
  }
});

export default updateItems;
