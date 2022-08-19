import { default as RestController } from "../rest.controller";
import { default as User } from "src/models/users.model";
import { Model, Sequelize } from "sequelize/types";
import type { Request, Response, Router } from "express";
import { hash, compare } from "bcryptjs";

class UsersController extends RestController {
  constructor(db: Sequelize) {
    super(db, User, "users");
  }

  addRoutes(router: Router): void {
    router.post("/register", this.createUser.bind(this));
    router.post("/login", this.loginUser.bind(this));
  }

  async createUser(req: Request, res: Response) {
    const { first_name, last_name, email, password } = req.body;

    const encryptedPassword = await hash(password, 10);

    const user = await this.model.create({
      first_name,
      last_name,
      email,
      password: encryptedPassword,
    });
    res.status(201).send(user);
  }

  async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;

    const user: any = await this.model.findOne<Model>({
      where: {
        email,
      },
    });

    if (!user) {
      res.status(401).send({
        message: "Invalid email or password",
      });

      return;
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      res.status(401).send({
        message: "Invalid email or password",
      });

      return;
    }

    res.status(200).send(user);
  }
}

export default UsersController;
