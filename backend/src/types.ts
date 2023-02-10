
/**
  * Enum of possible errors that will be sent from the api
  */
export enum Errors {
  Unknown = 'unknown',
  Database = 'database',
  Server = 'server',
}

/**
  * Interface that describes a User
  */
export interface IUserModel {
  id: number,
  login: string,
  password: string,
  name?: string,
  surname?: string,
  img?: string,
}

/**
  * Interface that describes a Board
  */
export interface IBoardModel {
  id: number,

  /**
  * ID of the owner of the Board
  */
  userId: number,
  title?: string,
}

/**
  * Interface that describes a Column
  */
export interface IColumnModel {
  id: number,

  /**
  * ID of the Board the Column is related to
  */
  boardId: number,
  order?: number,
  title?: string,
}

/**
  * Interface that describes a Card
  */
export interface ICardModel {
  id: number,

  /**
  * ID of the Column the Card is related to
  */
  columnId: number,
  order?: number,
  title?: string,
  description?: string,
}

/**
  * Interface that describes an Attachment (Any file) of a Card
  */
export interface ICardAttachmentModel {
  id: number,

  /**
  * ID of the Card the Attachment is related to
  */
  cardId: number,
  path: string,
  title?: string,
}