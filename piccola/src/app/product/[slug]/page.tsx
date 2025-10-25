import ImageGallery from "@/app/components/ImageGallery";
import { fullProductSchema } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";

async function getData(slug: string) {
    const query = `*[_type == 'product' && slug.current == "${slug}"][0]{
        _id,
        name,
        price,
        "slug": slug.current,
        images,
        "category": category->title,
        description,
    }`;

    const data = await client.fetch(query);

    return data;
    
}

export default async function ProductPage({params}: {params: {slug: string};
}) {
    const data: fullProductSchema = await getData(params.slug);
return (
    <div className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2">
                <ImageGallery images={data.images}/>
                <div className="md:py-8">   
                  <div className="mb-2 md:mb-3"> 
                    <span className="mb-0.5 inline-block text-gray-500">{data.category}</span>
                    <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{data.name}</h2>
                    </div> 
                    <div className="mb-2 flex items-center gap-3 md:mb-3">
                        <Button className="rounded-full gap-x-2">
                            <span className="text-sm pr-2 text-gray-800">
                                4.4
                            </span>
                            <Star className="h-5 w-5"/>
                        </Button>
                        <span className="text-sm text-gray transition duration-100">45 Ratings</span>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-end gap-2">
                            <span className="text-xl font-bold text-gray-800 md:text-2xl">
                               ₹{data.price}
                            </span>
                        </div>
                        <span className="text-sm text-gray-500">Free delivery on orders above ₹499</span>
                    </div>
                    <div className="mb-6 flex items-center gap-2 text-gray-500">
                        <Truck className="h-6 w-6"/>
                        <span className="text-sm">Delivery in 3-5 business days</span>
                    </div>
                    <div className="flex gap-2.5">
                        <Button variant={"outline"}>Add To Bag</Button>
                        <Button variant={"secondary"}>Checkout now</Button>                
                        </div>
                        <p className="mt-6 text-base text-gray-500 tracking-wide">{data.description}</p>
                </div>  
            </div>
        </div>
    </div>
)
}