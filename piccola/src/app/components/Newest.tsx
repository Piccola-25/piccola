import { ArrowRight } from "lucide-react";
import { productSchema } from "../interface";
import { client } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getData() {
const query = `*[_type == 'product'] | order(_createdAt desc)[0..4]{
    _id,
    name,
    price,
    "slug": slug.current,
    "imageUrl": images[0].asset->url,
    "categoryName": category->name
}`;   

const data = await client.fetch(query);

return data;
}

export default async function Newest() {
    const data: productSchema[] = await getData();
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Latest Collection</h2>
                <Link className="text-primary flex items-center gap-x-1" href="/all"> View All<span>
                    <ArrowRight/></span>
                    </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {data.map((product) => (
                    <div key = {product._id} className="group relative">
                        <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                            <Image
                            src={product.imageUrl}
                            alt="Failed to load image"
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            width={500}
                            height={500}
                            />
                        </div>
                        <
            </div>
                ))}
        </div>
        </div>
        </div>
    )
}