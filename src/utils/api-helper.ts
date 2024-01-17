import * as querystring from 'querystring';
import {IResource} from './IRequester';

function getPathFromResources(resources: IResource[] = []) {
  return resources.reduce((accumulator, resource) => {
    const {id, name} = resource;
    const namePath = name ? `/${name}` : '';
    const idPath = id ? `/${id}` : '';

    return `${accumulator}${namePath}${idPath}`;
  }, '');
}
export function getApiEndpoint(
  url: string,
  resources: IResource[] = [],
  queries?: any,
) {
  const path = getPathFromResources(resources);
  let apiEndpoint = path ? `${url}${path}` : url;
  const qs = queries ? `?${querystring.stringify(queries)}` : undefined;
  apiEndpoint = qs ? `${apiEndpoint}${qs}` : apiEndpoint;
  return apiEndpoint;
}
export function getHeaders(headers: any) {
  const {token, ...rest} = headers;
  headers = {
    ...rest,
    lang: 'en-EN',
    Authorization: token ? `Bearer ${token}` : 'Bearer dummy'
  };

  return headers;
}
