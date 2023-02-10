import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import { IBoardModel } from '../../types';

/**
  * Class that represents a Board as a sequelize model
  */
export class BoardModel extends Model<InferAttributes<BoardModel>, InferCreationAttributes<BoardModel>> implements IBoardModel {
  declare id: CreationOptional<number>;
  declare userId: number;
  declare title?: string | undefined;
}

/**
  * Object that represents a Board as a database table
  */
export const boardFields = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true
  },
};