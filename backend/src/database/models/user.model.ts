import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import { IUserModel } from '../../types';

/**
  * Class that represents a User as a sequelize model
  */
export class UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> implements IUserModel {
  declare id: CreationOptional<number>;
  declare login: string;
  declare password: string;
  declare name?: string | undefined;
  declare surname?: string | undefined;
  declare img?: string | undefined;
}

/**
  * Object that represents a User as a database table
  */
export const userFields = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  login: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: true
  },
};