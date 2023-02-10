import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import { ICardAttachmentModel, ICardModel } from '../../types';


export class CardAttachmentModel extends Model<InferAttributes<CardAttachmentModel>, InferCreationAttributes<CardAttachmentModel>> implements ICardAttachmentModel {
  declare id: CreationOptional<number>;
  declare cardId: ICardModel;
  declare path: string;
  declare text?: string | undefined;
}

export const cardAttachmentFields = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  cardId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
};