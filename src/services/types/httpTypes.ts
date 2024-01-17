type ErrorHandlerFunctionType = (res: Response) => void;

export interface RequestOptions extends RequestInit {
  url: string;
  method?: HTTPVerbs;
  params?: string | string[][] | Record<string, string> | URLSearchParams;
  errorHandlers?: Record<string, ErrorHandlerFunctionType>;
  retries?: number;
  delay?: number;
  timeout?: number;
  retryOnStatus?: Array<number>;
  headers?: {
    [key: string]: string;
  };
  customRetryFunction?: (url: string, options: RequestOptions, response: unknown) => Promise<Response>;
}

export type GetRequestOptions = Omit<RequestOptions, 'method'>;
export type PostRequestOptions = Omit<RequestOptions, 'method'>;
export type DeleteRequestOptions = Omit<RequestOptions, 'method'>;
export type PutRequestOptions = Omit<RequestOptions, 'method'>;
export type PatchRequestOptions = Omit<RequestOptions, 'method'>;

export enum HTTPVerbs {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export type Interceptors = {
  requestInterceptor: (data: RequestOptions) => RequestOptions;
  responseInterceptor: (data: Response) => Response;
}[];

export interface HttpAugments {
  customCache?: boolean;
  log?: boolean;
  interceptors?: Interceptors;
  byPassInterceptors?: boolean;
  skipIdempotency?: boolean;
  skipDefaultContentType?: boolean;
  customKeyGenerator?: () => string;
}
