export default{
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of the product',
        },
        {
            name: 'images',
            type: 'array',
            title: 'Product Images',
            of: [{ type: 'image' }],
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name',
            },
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price of the product',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description of the product',
        },
        {
            name: 'category',
            type: 'reference',
            title: 'Product Category',
            to: [{ type: 'category' }],
        }
    ], 
}