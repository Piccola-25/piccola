'use client';

import { CartProvider as StoreCartProvider } from 'use-shopping-cart';


export default function CartProvider({children}:{children: React.ReactNode}) {
    return <StoreCartProvider mode='payment' 
    cartMode='client-only' 
    stripe='{process.env.NEXT_PUBLIC_STRIPE_KEY}' currency='USD'
    successUrl={'http://localhost:3000/success'}
    cancelUrl={'http://localhost:3000/canceled'}
    billingAddressCollection={true}
    shouldPersist={true}
    language='en-US'
    >
        {children}
        </StoreCartProvider>
}