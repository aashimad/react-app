import {IQuery, IRequestBody, IResource} from './IRequester';

export interface IResponseData {
  [x: string]: string | number | Object;
}
export interface IResponseError {}
export interface IResponseHeader {
  [x: string]: string;
}
export interface IApiResponse {
  success: boolean;
  data: IResponseData;
  error: IResponseError;
  headers: IResponseHeader[];
}
export interface IGetService {
  resources?: IResource[];
  queries?: IQuery;
}
export interface ICreateService {
  resources?: IResource[];
  body: IRequestBody;
  queries?: IQuery;
}
export interface IUpdateService {
  resources?: IResource[];
  body: IRequestBody;
  queries?: IQuery;
}
export interface IDeleteService {
  resources?: IResource[];
  queries?: IQuery;
  body?: IRequestBody;
}

export interface IApiService {
  get(params: IGetService): Promise<IApiResponse>;
  create(params: ICreateService): Promise<IApiResponse>;
  update(params: IUpdateService): Promise<IApiResponse>;
  delete(params: IDeleteService): Promise<IApiResponse>;
}
