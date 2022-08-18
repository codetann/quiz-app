import { default as RestController } from "../rest.controller";
import { default as User } from "src/models/users.model";
import { Sequelize } from "sequelize/types";

class UsersController extends RestController {
  constructor(db: Sequelize) {
    super(db, User, "users");
  }
}

export default UsersController;
