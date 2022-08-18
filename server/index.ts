import { Server, Database } from "$config";
import { config } from "dotenv";
import cors from "cors";
import { json } from "express";
import { UsersController } from "./src";

const main = async () => {
  config();

  const server = new Server({
    database: new Database(),
    middlewares: [cors({ origin: "*" }), json()],
    controllers: [UsersController],
    sockets: [],
  });

  server.listen();
};

main();
