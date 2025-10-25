'use client'
import Image from "next/image"
import { urlFor } from "../lib/sanity"
import { useState } from "react";

interface ImageGalleryProps {
    images: any
}


export default function ImageGallery({images}: ImageGalleryProps) {
const [mainImage, otherImages] = useState(images[0]);

const updateMainImage = (image: any) => {
    otherImages(image);
}

return (
    <div className="grid gap-4 lg:grid-cols-5">
        <div className="order-last flex gap-4 lg:order-none lg:flex-col">
            {images.map((image: any, idx: any) => (
                <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
                    <Image 
                    src = {urlFor(image).url()}
                    width ={200}
                    height={200}
                    alt ="Failed to load image"
                    className="h-full w-full object-cover object-contain cursor-pointer"
                    onClick={() => updateMainImage(image)}
                    />
            </div>
            ))}
    </div>
    <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
            <Image 
            src = {urlFor(mainImage).url()}
            width ={500}
            height={500}
            alt ="Failed to load image"
            className="h-full w-full object-cover object-center"
            />
        </div>
    </div>
)
}