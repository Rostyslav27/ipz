require('dotenv').config();

import { Sequelize } from 'sequelize';
import { UserModel, userFields } from './models/user.model';
import { BoardModel, boardFields } from './models/board.model';
import { ColumnModel, columnFields } from './models/column.model';
import { CardModel, cardFields } from './models/card.model';
import { CardAttachmentModel, cardAttachmentFields } from './models/cardAttachment.model';

const sequelize = new Sequelize(process.env.DB_NAME as string, process.env.DB_USER as string, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});


// initializing models

UserModel.init(userFields, { sequelize, modelName: 'user' });
BoardModel.init(boardFields, { sequelize, modelName: 'board' });
ColumnModel.init(columnFields, { sequelize, modelName: 'column' });
CardModel.init(cardFields, { sequelize, modelName: 'card' });
CardAttachmentModel.init(cardAttachmentFields, { sequelize, modelName: 'card_attachment' });


// creating assotiations

BoardModel.hasMany(ColumnModel);
ColumnModel.belongsTo(BoardModel, { foreignKey: 'boardId' });

ColumnModel.hasMany(CardModel);
CardModel.belongsTo(ColumnModel, { foreignKey: 'columnId' });

CardModel.hasMany(CardAttachmentModel);
CardAttachmentModel.belongsTo(CardModel, { foreignKey: 'cardId' });


export default sequelize;