"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react"; 

const links = [
    { name: "Home", href: "/" },
    { name: "Men", href: "/Men" },
    { name: "Women", href: "/Women" },
    { name: "Kids", href: "/Kids" },
]
export default function navbar() {
    const pathname = usePathname();
    return(
        <header className="mb-8 border-b">
            <div className="flex items-center justify-between mx-auto max-w-2xl
            px-4 sm:px-6 lg:max-w-7xl">
                <Link href="/">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        <span className="text-red-500">Piccola</span>
                    </h1>
                </Link>
                <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                    {links.map((link, idx) =>(
                        <div key = {idx}>
                            {pathname === link.href ? (
                                <Link 
                                 className ="text-lg font-semihold text-primary text-red-600"
                                 href={link.href}>
                                    {link.name}
                                 </Link>
                            ): (
                                <Link 
                                 className ="text-lg font-semihold text-primary hover:text-red-600"
                                 href={link.href}>
                                    {link.name}
                                 </Link>
                            )}               
                        </div>
                    ))}
                </nav>
                <div className="flex divide-x border-r sm:border-l">
                <Button variant={"outline"} className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:w-24 rounded-none">
                    <ShoppingBag/>
                    <span className="hidden text-xs font-semibold text-gray-500 sm:block">Cart</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}
    