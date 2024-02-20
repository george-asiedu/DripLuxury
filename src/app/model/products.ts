export interface Products {
    id: string;
    title: string;
    description: string;
    featuredImage: {
      id: string;
      url: string;
    };
    variants: Variant[];
}

export interface Variant {
    node: {
      price: {
        amount: number;
        currencyCode: string;
      };
    };
}