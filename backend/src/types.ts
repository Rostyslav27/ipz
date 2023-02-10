
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