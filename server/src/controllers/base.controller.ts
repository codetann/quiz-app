import { Router } from "express";
import { Sequelize } from "sequelize/types";

abstract class BaseController {
  protected db: Sequelize;

  constructor(db: Sequelize) {
    this.db = db;
  }

  abstract getPath(): string;
  abstract configureRoutes(router: Router): void;
  addRoutes(router: Router) {}
}

export default BaseController;
