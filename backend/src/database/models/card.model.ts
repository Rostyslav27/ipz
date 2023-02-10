import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import { ICardModel, IColumnModel } from '../../types';


export class CardModel extends Model<InferAttributes<CardModel>, InferCreationAttributes<CardModel>> implements ICardModel {
  declare id: CreationOptional<number>;
  declare columnId: IColumnModel;
  declare order?: number | undefined;
  declare title?: string | undefined;
  declare description?: string | undefined;
}

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