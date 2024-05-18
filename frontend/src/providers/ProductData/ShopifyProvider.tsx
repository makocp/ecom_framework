import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";

export interface IShopifyProduct {
    productId: string;
    title: string;
    category?: string;
    price: number;
    description: string;
    image: string;
}

interface IShopifyContextType {
    products: IShopifyProduct[];
    setProducts: React.Dispatch<React.SetStateAction<IShopifyProduct[]>>;
}

const ShopifyContext: React.Context<IShopifyContextType | undefined> = createContext<IShopifyContextType | undefined>(undefined);

export const ShopifyProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [products, setProducts]: [IShopifyProduct[], React.Dispatch<React.SetStateAction<IShopifyProduct[]>>] = useState<IShopifyProduct[]>([]);

    const loadProducts = async () => {
        try {
            const response: any = await fetch('http://localhost:4242/shopify/products');
            const data = await response.json();
            const simplifiedProducts = data.products.map((product: any) => ({
                productId: product.variants[0].id.toString(),
                title: product.title,
                category: product.tags,
                price: convertPriceToNumber(product.variants[0].price),
                description: product.body_html ?? '',
                image: product.image ? product.image.src : 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081'
            }));
            setProducts(simplifiedProducts);
        } catch (e) {
            console.error(e);
            return [];
        }
    };

    const convertPriceToNumber = (price: string): number => {
        return Math.round(parseFloat(price) * 100);
    };

    useEffect(() => {
        loadProducts().then();
    }, []);

    return (
        <ShopifyContext.Provider value={{products, setProducts}}>
            {children}
        </ShopifyContext.Provider>
    );
};

export const useShopifyData = () => {
    const context = useContext(ShopifyContext);
    if (context === undefined) {
        throw new Error('useProductData must be used within a ProductProvider');
    }
    return context;
}