import {ApiService} from '../../utils/ApiService';
import {Requester} from '../../utils/Requester';

const url_product = `/assets/data/products.json`;
export const productAPI = new ApiService(new Requester(), url_product);
