import { DataTypes } from "sequelize";

class Users {
  private id: any = {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  };
  private first_name: any = {
    type: DataTypes.STRING,
    allowNull: false,
  };
  private last_name: any = {
    type: DataTypes.STRING,
    allowNull: false,
  };
  private email: any = {
    type: DataTypes.STRING,
    allowNull: false,
    isEmail: {
      args: true,
      msg: "Valid email-id required",
    },
    unique: { args: true, msg: "Email address already in use!" },
  };
  private password: any = {
    type: DataTypes.STRING,
    allowNull: false,
  };
}

export default Users;
