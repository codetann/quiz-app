import BaseController from "./base.controller";
import type { Request, Response, Router } from "express";
import { Sequelize } from "sequelize/types";

class RestController extends BaseController {
  model: ReturnType<Sequelize["define"]>;
  model_name: string;

  constructor(db: Sequelize, model: any, model_name: string) {
    super(db);
    this.model_name = model_name;
    this.model = this.db.define(this.model_name, new model());
  }

  getPath(): string {
    return `/${this.model_name}`;
  }

  configureRoutes(router: Router): void {
    router.get("/", this.get.bind(this));
    router.get("/:id", this.get.bind(this));
    router.post("/", this.post.bind(this));
    router.put("/:id", this.put.bind(this));
    router.delete("/:id", this.delete.bind(this));
  }

  async get(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      if (id) {
        const item = await this.model.findOne({
          where: { id },
        });
        res.send(item);
      } else {
        const items = await this.model.findAll({
          where: { ...req.params },
        });

        res.send(items);
      }
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  }
  async post(req: Request, res: Response): Promise<void> {
    const { body } = req;

    try {
      const item = await this.model.create(body);
      res.send(item);
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  }
  async put(req: Request, res: Response): Promise<void> {}
  async delete(req: Request, res: Response): Promise<void> {}
}

export default RestController;
