import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import { IBoardModel, IUserModel } from '../../types';


export class BoardModel extends Model<InferAttributes<BoardModel>, InferCreationAttributes<BoardModel>> implements IBoardModel {
  declare id: CreationOptional<number>;
  declare userId: IUserModel;
  declare title?: string | undefined;
}

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