import express, { Router, type Application } from "express";
import { Sequelize } from "sequelize/types";

interface ConstructorOptions {
  database: any;
  middlewares: any[];
  controllers: any[];
  sockets: any[];
}

class Server {
  private app: Application = express();
  private port: number | string = process.env.PORT || 4000;
  private db: Sequelize;

  constructor({
    database,
    middlewares,
    controllers,
    sockets,
  }: ConstructorOptions) {
    this.db = database.db;

    this.initMiddlewares(middlewares);
    this.initControllers(controllers as any);
  }

  private initMiddlewares(middlewares: any[]) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });
  }

  private initControllers(controllers: []) {
    controllers.forEach((controller: any) => {
      const router = express.Router();
      const _controller = new controller(this.db);

      _controller.addRoutes(router);
      _controller.configureRoutes(router);
      this.app.use(_controller.getPath(), router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;
