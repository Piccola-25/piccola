export interface productSchema {
    _id: string;
    name: string;
    slug: string;
    imageUrl: string;
    price: number;
    categoryName: string;
}

export interface fullProductSchema {
    _id: string;
    name: string;
    slug: string;
    images: any
    price: number;
    category: string;
    description: string;
}