import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import { ICardModel } from '../../types';

/**
  * Class that represents a Card as a sequelize model
  */
export class CardModel extends Model<InferAttributes<CardModel>, InferCreationAttributes<CardModel>> implements ICardModel {
  declare id: CreationOptional<number>;
  declare columnId: number;
  declare order?: number | undefined;
  declare title?: string | undefined;
  declare description?: string | undefined;
}

/**
  * Object that represents a Card as a database table
  */
export const cardFields = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  columnId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  order: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
};