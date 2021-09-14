import { Request, Response } from "express";

/** Para instanciar conexão com mysql */
//import { sequelize } from "../connection/mysql";

/** Para instanciar conexão com postgres */
import { sequelize } from "../connection/postgres";

import { Product } from "../models/Product";

export const home = async (req: Request, res: Response) => {

    
  try {
    await sequelize.authenticate();
    console.log("Conexão estabelecida com sucesso!");
  } catch (err) {
    console.log(err);
  }

  let age: number = 90;
  let showOld: boolean = false;

  if (age > 50) {
    showOld = true;
  }

  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(12);

  res.render("pages/home", {
    name: "Bonieky",
    lastName: "Lacerda",
    showOld,
    products: list,
    expensives: expensiveList,
    frasesDoDia: [],
  });
};
