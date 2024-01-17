import {get_api_endpoint} from './env-helper';
import {
  IApiService,
  ICreateService,
  IDeleteService,
  IGetService,
  IUpdateService,
} from './IApiService';
import {IRequester} from './IRequester';

export class ApiService implements IApiService {
  constructor(
    private requester: IRequester,
    protected url: string = '',
    protected isMock?: boolean,
  ) {}

  async get(params?: IGetService): Promise<any> {
    try {
      const url = await get_api_endpoint(this.url, this.isMock);
      const result = await this.requester.get({
        ...params,
        url: url, 
      });
      return result;
    } catch (e) {
      throw e;
    }
  }
  async create(params: ICreateService): Promise<any> {
    try {
      const url = await get_api_endpoint(this.url);
      const result = await this.requester.post({...params, url: url});

      return result;
    } catch (e) {
      throw e;
    }
  }
  async update(params: IUpdateService): Promise<any> {
    try {
      const url = await get_api_endpoint(this.url);
      const result = await this.requester.put({...params, url: url});

      return result;
    } catch (e) {
      throw e;
    }
  }
  async delete(params: IDeleteService): Promise<any> {
    try {
      const url = await get_api_endpoint(this.url);
      const result = await this.requester.delete({...params, url: url});

      return result;
    } catch (e) {
      throw e;
    }
  }
}
