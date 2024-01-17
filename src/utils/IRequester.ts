export interface IRequestBody {
  [x: string]: any;
}
export interface IRequestHeader {
  [x: string]: string;
}
export interface IResource {
  id?: string;
  name?: string;
}
export interface IQuery {
  [x: string]: string | number | boolean | string[];
}
export interface IRequesterParams {
  url: string;
  resources?: IResource[];
  headers?: IRequestHeader;
}
export interface IGetRequesterParams extends IRequesterParams {
  queries?: IQuery;
}
export interface IPostRequesterParams extends IRequesterParams {
  body: IRequestBody;
  queries?: IQuery;
}
export interface IPutRequesterParams extends IRequesterParams {
  body: IRequestBody;
  queries?: IQuery;
}
export interface IDeleteRequesterParams extends IRequesterParams {
  queries?: IQuery;
}

export interface IRequester {
  get(params: IGetRequesterParams): Promise<any>;
  post(params: IPostRequesterParams): Promise<any>;
  put(params: IPutRequesterParams): Promise<any>;
  delete(params: IDeleteRequesterParams): Promise<any>;
}
