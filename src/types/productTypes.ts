export type TabDataType = {
  headers: Array<string>;
  descriptions: Array<string>;
}

export type ProductImageType = {
  src: string;
  alt: string;
}

export type ProductType = {
  name: string;
  model: string;
  availability: string;
  desc: string;
  rating: number;
  maxRating: number;
  featureList?: Array<string>;
  sizes:Array<string>;
  price: {
    actualPrice: number;
    discountedPrice: number;
  };
  tabData: TabDataType;
  images: Array<ProductImageType>;
}

export type IntialProduct = {
  isLoading:  boolean;
  hasError: boolean;
  product?: Array<ProductType>;
  inCartQty: number;
  status: string;
}

export class ProductData {
  name: string;
  model: string;
  availability: string;
  desc: string;
  rating: number;
  maxRating: number;
  featureList?: string[];
  sizes: string[];
  price: {
    actualPrice: number;
    discountedPrice: number;
  };
  tabData: TabDataType;
  images: ProductImageType[];

  constructor(product: ProductType) {
    this.model = product.model;
    this.name = product.name;
    this.availability = product.availability;
    this.desc = product.desc;
    this.rating = product.rating;
    this.maxRating = product.maxRating;
    this.featureList = product.featureList;
    this.sizes = product.sizes;
    this.price = product.price;
    this.tabData = product.tabData;
    this.images = product.images;
  }
}