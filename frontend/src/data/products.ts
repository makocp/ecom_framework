export interface Product {
    id: string;
    title: string;
    category: string;
    price: number;
    description: string;
    image: number;
    shippingCost: number;
}

export interface Order {
    id: string;
    userId: number;
    products: Product[];
    amountPrice: number;
    amountShipping: number;
    shippingAddress: string;
    isPaid: boolean;
    isDelivered: boolean
}

export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
}

export interface CartProduct {
    id: string;
    product: Product;
    quantity: number;
}

export interface MockImage {
    image: number;
}

const mockImages: MockImage[] = [
    {image: require('../assets/images/sample_image_1.png')},
    {image: require('../assets/images/sample_image_2.png')},
    {image: require('../assets/images/sample_image_3.png')},
    {image: require('../assets/images/sample_image_4.png')},
    {image: require('../assets/images/sample_image_5.png')},
    {image: require('../assets/images/sample_image_6.png')},
    {image: require('../assets/images/sample_image_7.png')}
];
export const mockProducts: Product[] = [
    {
        id: '1',
        title: 'Macbook Pro',
        category: 'Notebook',
        price: 249995,
        description: `Experience the Difference with the LoremIpsum2000. Designed for those who demand excellence, this device combines cutting-edge technology with sleek, ergonomic design to deliver unparalleled performance and user satisfaction.\n\n**Tech Details That Set the LoremIpsum2000 Apart:**\n- Performance: Equipped with the latest processor and 16GB RAM, the LoremIpsum2000 ensures lightning-fast operations, from complex computations to seamless multitasking.\n- Display: Enjoy vivid, lifelike colors on a stunning display for an immersive viewing experience.\n- Connectivity: With advanced Wi-Fi and Bluetooth, stay connected with unmatched speed and reliability.\n- Battery Life: Power through your day with up to 20 hours of battery life, making it perfect for on-the-go use.\n\n**Shipping Info That Puts Your Mind at Ease:**\n- Fast & Free Shipping: Get your LoremIpsum2000 delivered to your doorstep quickly and without additional charges.\n- Secure Packaging: We ensure your product arrives in pristine condition with our protective packaging.\n\n**Money-Back Guarantee for Your Peace of Mind:**\nEnjoy a 90-day money-back guarantee with the LoremIpsum2000. If it doesn't meet your expectations, we're here to make it right.\n\n**Don't Settle for Less - Upgrade Your Tech Today!**\nElevate your productivity and style with the LoremIpsum2000. Add to Cart and start enjoying a superior digital experience tailored to your needs.`,
        image: mockImages[0].image,
        shippingCost: 0
    },
    {
        id: '2',
        title: 'Samsung Galaxy S20',
        category: 'Smartphone',
        price: 39995,
        description: `Experience the Difference with the LoremIpsum2000. Designed for those who demand excellence, this device combines cutting-edge technology with sleek, ergonomic design to deliver unparalleled performance and user satisfaction.\n\n**Tech Details That Set the LoremIpsum2000 Apart:**\n- Performance: Equipped with the latest processor and 16GB RAM, the LoremIpsum2000 ensures lightning-fast operations, from complex computations to seamless multitasking.\n- Display: Enjoy vivid, lifelike colors on a stunning display for an immersive viewing experience.\n- Connectivity: With advanced Wi-Fi and Bluetooth, stay connected with unmatched speed and reliability.\n- Battery Life: Power through your day with up to 20 hours of battery life, making it perfect for on-the-go use.\n\n**Shipping Info That Puts Your Mind at Ease:**\n- Fast & Free Shipping: Get your LoremIpsum2000 delivered to your doorstep quickly and without additional charges.\n- Secure Packaging: We ensure your product arrives in pristine condition with our protective packaging.\n\n**Money-Back Guarantee for Your Peace of Mind:**\nEnjoy a 90-day money-back guarantee with the LoremIpsum2000. If it doesn't meet your expectations, we're here to make it right.\n\n**Don't Settle for Less - Upgrade Your Tech Today!**\nElevate your productivity and style with the LoremIpsum2000. Add to Cart and start enjoying a superior digital experience tailored to your needs.`,
        image: mockImages[1].image,
        shippingCost: 495
    },
    {
        id: '3',
        title: 'iPad',
        category: 'Tablet',
        price: 49995,
        description: `Experience the Difference with the LoremIpsum2000. Designed for those who demand excellence, this device combines cutting-edge technology with sleek, ergonomic design to deliver unparalleled performance and user satisfaction.\n\n**Tech Details That Set the LoremIpsum2000 Apart:**\n- Performance: Equipped with the latest processor and 16GB RAM, the LoremIpsum2000 ensures lightning-fast operations, from complex computations to seamless multitasking.\n- Display: Enjoy vivid, lifelike colors on a stunning display for an immersive viewing experience.\n- Connectivity: With advanced Wi-Fi and Bluetooth, stay connected with unmatched speed and reliability.\n- Battery Life: Power through your day with up to 20 hours of battery life, making it perfect for on-the-go use.\n\n**Shipping Info That Puts Your Mind at Ease:**\n- Fast & Free Shipping: Get your LoremIpsum2000 delivered to your doorstep quickly and without additional charges.\n- Secure Packaging: We ensure your product arrives in pristine condition with our protective packaging.\n\n**Money-Back Guarantee for Your Peace of Mind:**\nEnjoy a 90-day money-back guarantee with the LoremIpsum2000. If it doesn't meet your expectations, we're here to make it right.\n\n**Don't Settle for Less - Upgrade Your Tech Today!**\nElevate your productivity and style with the LoremIpsum2000. Add to Cart and start enjoying a superior digital experience tailored to your needs.`,
        image: mockImages[2].image,
        shippingCost: 495
    },
    {
        id: '4',
        title: 'Dell Monitor',
        category: 'Monitor',
        price: 29995,
        description: `Experience the Difference with the LoremIpsum2000. Designed for those who demand excellence, this device combines cutting-edge technology with sleek, ergonomic design to deliver unparalleled performance and user satisfaction.\n\n**Tech Details That Set the LoremIpsum2000 Apart:**\n- Performance: Equipped with the latest processor and 16GB RAM, the LoremIpsum2000 ensures lightning-fast operations, from complex computations to seamless multitasking.\n- Display: Enjoy vivid, lifelike colors on a stunning display for an immersive viewing experience.\n- Connectivity: With advanced Wi-Fi and Bluetooth, stay connected with unmatched speed and reliability.\n- Battery Life: Power through your day with up to 20 hours of battery life, making it perfect for on-the-go use.\n\n**Shipping Info That Puts Your Mind at Ease:**\n- Fast & Free Shipping: Get your LoremIpsum2000 delivered to your doorstep quickly and without additional charges.\n- Secure Packaging: We ensure your product arrives in pristine condition with our protective packaging.\n\n**Money-Back Guarantee for Your Peace of Mind:**\nEnjoy a 90-day money-back guarantee with the LoremIpsum2000. If it doesn't meet your expectations, we're here to make it right.\n\n**Don't Settle for Less - Upgrade Your Tech Today!**\nElevate your productivity and style with the LoremIpsum2000. Add to Cart and start enjoying a superior digital experience tailored to your needs.`,
        image: mockImages[3].image,
        shippingCost: 995
    },
    {
        id: '5',
        title: 'Headset',
        category: 'Utility',
        price: 7995,
        description: `Experience the Difference with the LoremIpsum2000. Designed for those who demand excellence, this device combines cutting-edge technology with sleek, ergonomic design to deliver unparalleled performance and user satisfaction.\n\n**Tech Details That Set the LoremIpsum2000 Apart:**\n- Performance: Equipped with the latest processor and 16GB RAM, the LoremIpsum2000 ensures lightning-fast operations, from complex computations to seamless multitasking.\n- Display: Enjoy vivid, lifelike colors on a stunning display for an immersive viewing experience.\n- Connectivity: With advanced Wi-Fi and Bluetooth, stay connected with unmatched speed and reliability.\n- Battery Life: Power through your day with up to 20 hours of battery life, making it perfect for on-the-go use.\n\n**Shipping Info That Puts Your Mind at Ease:**\n- Fast & Free Shipping: Get your LoremIpsum2000 delivered to your doorstep quickly and without additional charges.\n- Secure Packaging: We ensure your product arrives in pristine condition with our protective packaging.\n\n**Money-Back Guarantee for Your Peace of Mind:**\nEnjoy a 90-day money-back guarantee with the LoremIpsum2000. If it doesn't meet your expectations, we're here to make it right.\n\n**Don't Settle for Less - Upgrade Your Tech Today!**\nElevate your productivity and style with the LoremIpsum2000. Add to Cart and start enjoying a superior digital experience tailored to your needs.`,
        image: mockImages[4].image,
        shippingCost: 0
    },
    {
        id: '6',
        title: 'Keyboard',
        category: 'Utility',
        price: 12995,
        description: `Experience the Difference with the LoremIpsum2000. Designed for those who demand excellence, this device combines cutting-edge technology with sleek, ergonomic design to deliver unparalleled performance and user satisfaction.\n\n**Tech Details That Set the LoremIpsum2000 Apart:**\n- Performance: Equipped with the latest processor and 16GB RAM, the LoremIpsum2000 ensures lightning-fast operations, from complex computations to seamless multitasking.\n- Display: Enjoy vivid, lifelike colors on a stunning display for an immersive viewing experience.\n- Connectivity: With advanced Wi-Fi and Bluetooth, stay connected with unmatched speed and reliability.\n- Battery Life: Power through your day with up to 20 hours of battery life, making it perfect for on-the-go use.\n\n**Shipping Info That Puts Your Mind at Ease:**\n- Fast & Free Shipping: Get your LoremIpsum2000 delivered to your doorstep quickly and without additional charges.\n- Secure Packaging: We ensure your product arrives in pristine condition with our protective packaging.\n\n**Money-Back Guarantee for Your Peace of Mind:**\nEnjoy a 90-day money-back guarantee with the LoremIpsum2000. If it doesn't meet your expectations, we're here to make it right.\n\n**Don't Settle for Less - Upgrade Your Tech Today!**\nElevate your productivity and style with the LoremIpsum2000. Add to Cart and start enjoying a superior digital experience tailored to your needs.`,
        image: mockImages[5].image,
        shippingCost: 0
    },
    {
        id: '7',
        title: 'Mouse',
        category: 'Utility',
        price: 3995,
        description: `Experience the Difference with the LoremIpsum2000. Designed for those who demand excellence, this device combines cutting-edge technology with sleek, ergonomic design to deliver unparalleled performance and user satisfaction.\n\n**Tech Details That Set the LoremIpsum2000 Apart:**\n- Performance: Equipped with the latest processor and 16GB RAM, the LoremIpsum2000 ensures lightning-fast operations, from complex computations to seamless multitasking.\n- Display: Enjoy vivid, lifelike colors on a stunning display for an immersive viewing experience.\n- Connectivity: With advanced Wi-Fi and Bluetooth, stay connected with unmatched speed and reliability.\n- Battery Life: Power through your day with up to 20 hours of battery life, making it perfect for on-the-go use.\n\n**Shipping Info That Puts Your Mind at Ease:**\n- Fast & Free Shipping: Get your LoremIpsum2000 delivered to your doorstep quickly and without additional charges.\n- Secure Packaging: We ensure your product arrives in pristine condition with our protective packaging.\n\n**Money-Back Guarantee for Your Peace of Mind:**\nEnjoy a 90-day money-back guarantee with the LoremIpsum2000. If it doesn't meet your expectations, we're here to make it right.\n\n**Don't Settle for Less - Upgrade Your Tech Today!**\nElevate your productivity and style with the LoremIpsum2000. Add to Cart and start enjoying a superior digital experience tailored to your needs.`,
        image: mockImages[6].image,
        shippingCost: 0
    },
]

export const mockOrders: Order[] = [
        {
            id: '1',
            userId: 42,
            products: mockProducts.slice(3, 7),
            amountPrice: 3995,
            amountShipping: 495,
            shippingAddress: 'Hauptstrasse 1, 8700 Leoben, AT',
            isPaid: true,
            isDelivered: true
        }
    ]
;

export const mockUsers: User[] = [
    {id: '42', email: 'marin@sekic.at', firstName: 'Marin', lastName: 'Sekic'}
]

export const mockCartProducts: CartProduct[] = [
    {id: '1', product: mockProducts[4], quantity: 2},
    {id: '2', product: mockProducts[2], quantity: 1},
    {id: '3', product: mockProducts[6], quantity: 2}
]