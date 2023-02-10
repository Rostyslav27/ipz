
export enum Errors {
  Unknown = 'unknown',
  Database = 'database',
  Server = 'server',
}

export interface IUserModel {
  id: number,
  login: string,
  password: string,
  name?: string,
  surname?: string,
  img?: string,
}

export interface IBoardModel {
  id: number,
  userId: IUserModel,
  title?: string,
}

export interface IColumnModel {
  id: number,
  boardId: IBoardModel,
  order?: number,
  title?: string,
}

export interface ICardModel {
  id: number,
  columnId: IColumnModel,
  order?: number,
  title?: string,
  description?: string,
}

export interface ICardAttachmentModel {
  id: number,
  cardId: ICardModel,
  path: string,
  title?: string,
}