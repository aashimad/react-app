import type { RequestOptions } from '../types/httpTypes';
import { HTTPVerbs } from '../types/httpTypes';

export function getProductReqObj(): RequestOptions {
  return {
    url: `/products.json`,
    method: HTTPVerbs.GET,
    retries: 0,
  };
}