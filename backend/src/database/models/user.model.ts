import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import { IUserModel } from '../../types';


export class UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> implements IUserModel {
  declare id: CreationOptional<number>;
  declare login: string;
  declare password: string;
  declare name?: string | undefined;
  declare surname?: string | undefined;
  declare img?: string | undefined;
}

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