import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import { ICardAttachmentModel } from '../../types';

/**
  * Class that represents a CardAttachment as a sequelize model
  */
export class CardAttachmentModel extends Model<InferAttributes<CardAttachmentModel>, InferCreationAttributes<CardAttachmentModel>> implements ICardAttachmentModel {
  declare id: CreationOptional<number>;
  declare cardId: number;
  declare path: string;
  declare text?: string | undefined;
}

/**
  * Object that represents a CardAttachment as a database table
  */
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