import { Request, Response } from "express";

/** Para instanciar conexão com mysql */
//import { sequelize } from "../connection/mysql";

/** Para instanciar conexão com postgres */
import { sequelize } from "../connection/postgres";

import { Product } from "../models/Product";
import { User } from "../models/User";

export const home = async (req: Request, res: Response) => {

  let users = await User.findAll();

  /** Para exibir todos os usuários no console */
  //console.log("USUÁRIOS: ", JSON.stringify(users));









  /*
  try {
    await sequelize.authenticate();
    console.log("Conexão estabelecida com sucesso!");
  } catch (err) {
    console.log(err);
  }
  */

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
    users
  });
};
