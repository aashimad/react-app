import {IQuery, IRequestBody, IResource} from '../../utils/IRequester';

export interface TabDataType {
  headers:Array<string>;
  descriptions:Array<string>;
}

export interface ProductImageType {
  src: string;
  alt: string;
}

export interface ProductData {
  name: string;
  model: string;
  availability: string;
  desc: string;
  rating: number;
  maxRating: number;
  featureList: Array<string>;
  sizes:Array<string>;
  price: Array<string>;
  tabData: TabDataType;
  images: Array<TabDataType>;
}

export interface ProductResponse {
  success: boolean;
  data: ProductData;
  error: {};
  headers: [];
}