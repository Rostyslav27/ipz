import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import { IColumnModel, IBoardModel } from '../../types';


export class ColumnModel extends Model<InferAttributes<ColumnModel>, InferCreationAttributes<ColumnModel>> implements IColumnModel {
  declare id: CreationOptional<number>;
  declare boardId: IBoardModel;
  declare order?: number | undefined;
  declare title?: string | undefined;
}

export const columnFields = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  boardId: {
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
};