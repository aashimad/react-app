import AsyncStorage from '@react-native-async-storage/async-storage';
import {getApiEndpoint, getHeaders} from './api-helper';
import {
  IDeleteRequesterParams,
  IGetRequesterParams,
  IPostRequesterParams,
  IPutRequesterParams,
  IRequester,
} from './IRequester';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

export class Requester implements IRequester {
  async get(params: IGetRequesterParams): Promise<any> {
    let {url, resources, queries, ...rest} = params;
    url = getApiEndpoint(url, resources, queries);
    try {
      const res = await this.request({...rest, url, method: 'GET'});
      return res;
    } catch (err) {
      throw err;
    }
  }
  async post(params: IPostRequesterParams): Promise<any> {
    let {url, resources, queries, ...rest} = params;

    url = getApiEndpoint(url, resources, queries);

    try {
      const res = await this.request({...rest, url, method: 'POST'});

      return res;
    } catch (err) {
      throw err;
    }
  }
  async put(params: IPutRequesterParams): Promise<any> {
    let {url, resources, queries, ...rest} = params;

    url = getApiEndpoint(url, resources,queries);

    try {
      const res = await this.request({...rest, url, method: 'PUT'});
      return res;
    } catch (err) {
      throw err;
    }
  }
  async delete(params: IDeleteRequesterParams): Promise<any> {
    let {url, resources, queries, ...rest} = params;

    url = getApiEndpoint(url, resources, queries);

    try {
      const res = await this.request({...rest, url, method: 'DELETE'});
      return res;
    } catch (err) {
      throw err;
    }
  }

  private async request(config: any) {
    let {url, method, body = undefined, headers = {}} = config;
    const result = (await AsyncStorage.getItem('auth')) || '{}';
    const auth = JSON.parse(result);
    headers = getHeaders({
      ...defaultHeaders,
      ...headers,
      token: auth.access_token,
    });
    try {
      const res = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(body),
      });

      switch (res.status) {
        case 500:
          await AsyncStorage.setItem('errorres', JSON.stringify(res));
          await AsyncStorage.setItem(
            'errorreq',
            `${method} ${url} ${JSON.stringify(headers)} ${JSON.stringify(
              body,
            )}`,
          );
          throw {
            errorCode: 'INTERNALSERVERERROR',
            en_message: 'Something went wrong. Please try again.'
          };
        case 401:
          await AsyncStorage.setItem('errorres', JSON.stringify(res));
          await AsyncStorage.setItem(
            'errorreq',
            `${method} ${url} ${JSON.stringify(headers)} ${JSON.stringify(
              body,
            )}`,
          );
          let resJson = await res.json();
          throw {
            errorCode: 'REDIRECT',
            en_message: 'Unauthorized'
          };
        case 403:
          await AsyncStorage.setItem('errorres', JSON.stringify(res));
          await AsyncStorage.setItem(
            'errorreq',
            `${method} ${url} ${JSON.stringify(headers)} ${JSON.stringify(
              body,
            )}`,
          );
          throw {
            errorCode: 'REDIRECT',
            en_message: 'Something went wrong. Please try again.',
          };
        case 404:
          await AsyncStorage.setItem('errorres', JSON.stringify(res));
          await AsyncStorage.setItem(
            'errorreq',
            `${method} ${url} ${JSON.stringify(headers)} ${JSON.stringify(
              body,
            )}`,
          );
          throw {
            errorCode: 'APINOTFOUND',
            en_message: 'NOT FOUND',
          };
        case 400: {
          await AsyncStorage.setItem('errorres', JSON.stringify(res));
          await AsyncStorage.setItem(
            'errorreq',
            `${method} ${url} ${JSON.stringify(headers)} ${JSON.stringify(
              body,
            )}`,
          );
          const result = await res.json();
          throw result.error[0];
        }
        case 200: {
          const result = await res.json();
          if (result) {
            return result;
          } else {
            throw result.error[0];
          }
        }
        default: {
          await AsyncStorage.setItem('errorres', JSON.stringify(res));
          await AsyncStorage.setItem(
            'errorreq',
            `${method} ${url} ${JSON.stringify(headers)} ${JSON.stringify(
              body,
            )}`,
          );
          throw {
            errorCode: '',
            en_message: 'System error. Please try again later'
          };
        }
      }
    } catch (err) {
      throw err;
    }
  }
}
