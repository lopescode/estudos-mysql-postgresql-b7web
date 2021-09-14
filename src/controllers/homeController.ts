import { Request, Response } from "express";

/** Tipos de consulta 1 */
import { Op } from "sequelize";

/** Para instanciar conexão com mysql */
//import { sequelize } from "../connection/mysql";

/** Para instanciar conexão com postgres */
//import { sequelize } from "../connection/postgres";

import { Product } from "../models/Product";
import { User } from "../models/User";

export const home = async (req: Request, res: Response) => {
  /** Consultando dados do Model */
  //let users = await User.findAll({});

  /** Para exibir todos os usuários no console */
  //console.log("USUÁRIOS: ", JSON.stringify(users));

  /** Tipos de consulta 1 */
  /*
  let users = await User.findAll({
    //attributes: ['name', 'age']
    //attributes: { exclude: ['id']}
    //where: { name: 'leonardo'} // Filtragem simples
    //where: { name: 'leonardo', age: '20' } // Filtragem E
    where: {
      //[Op.or]: [{ age: 24 }, { name: "Natan" }], // Filtragem "OU"
      //age: { [Op.or]: [24, 23] }, // Filtragem "OU"
    },
  });
  */

  /** Tipos de consulta 2 */
  let searchName: string = 'eo'
  let users = await User.findAll({
    where: {
      //age: {
        //[Op.gt]: 25, // > 25
        //[Op.gte]: 25, // >= 25
        //[Op.lt]: 25, // < 25
        //[Op.lte]: 25, // <= 25
        //[Op.between]: [25, 28] // entre 25 e 28
        //[Op.notBetween]: [25, 28] // não está entre 25 e 28
        //[Op.notIn]: [25, 28] // não tem 25 e nem 28
      //},
      name: {
        //[Op.like]: 'le%', // Onde começar por le
        [Op.like]: `%${searchName}%` // Onde tiver eo
      }
    },
  });

  /** Conectando ao banco de dados*/
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
    users,
  });
};
