import { Sequelize } from "sequelize";

class DatabaseConnection {
  private path: string = process.env.DB_PATH as string;
  public db: Sequelize;

  constructor() {
    this.db = new Sequelize({
      dialect: "sqlite",
      storage: this.path,
    });

    this.init();
  }

  private async init() {
    try {
      await this.db.sync();
      await this.db.authenticate();
      console.log("✅ Connection has been established successfully.");
    } catch (error) {
      console.error("🚫 Unable to connect to the database:", error);
    }
  }
}

export default DatabaseConnection;
