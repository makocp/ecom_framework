export type Product = {
    id: string,
    title: string,
    category: string,
    price: number,
    description: string,
    image: any,
    shippingCost: number
};

const mockImages: any = [
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
        description: 'Introducing the latest innovation in tech, the IpsumTech Pro X2000. With cutting-edge features and unparalleled performance, this device sets a new standard in the world of technology. Equipped with a high-resolution display and a powerful processor, it offers an exceptional user experience for both work and play. The IpsumTech Pro X2000 boasts advanced connectivity options, extended battery life, and a sleek, durable design. Whether you\'re a tech enthusiast or a professional on the go, this device is engineered to meet your needs. Experience the future of technology today with the IpsumTech Pro X2000.',
        image: mockImages[0].image,
        shippingCost: 0
    },
    {
        id: '2',
        title: 'Samsung Galaxy S20',
        category: 'Smartphone',
        price: 39995,
        description: 'Introducing the latest innovation in tech, the IpsumTech Pro X2000. With cutting-edge features and unparalleled performance, this device sets a new standard in the world of technology. Equipped with a high-resolution display and a powerful processor, it offers an exceptional user experience for both work and play. The IpsumTech Pro X2000 boasts advanced connectivity options, extended battery life, and a sleek, durable design. Whether you\'re a tech enthusiast or a professional on the go, this device is engineered to meet your needs. Experience the future of technology today with the IpsumTech Pro X2000.',
        image: mockImages[1].image,
        shippingCost: 495
    },
    {
        id: '3',
        title: 'iPad',
        category: 'Tablet',
        price: 49995,
        description: 'Introducing the latest innovation in tech, the IpsumTech Pro X2000. With cutting-edge features and unparalleled performance, this device sets a new standard in the world of technology. Equipped with a high-resolution display and a powerful processor, it offers an exceptional user experience for both work and play. The IpsumTech Pro X2000 boasts advanced connectivity options, extended battery life, and a sleek, durable design. Whether you\'re a tech enthusiast or a professional on the go, this device is engineered to meet your needs. Experience the future of technology today with the IpsumTech Pro X2000.',
        image: mockImages[2].image,
        shippingCost: 495
    },
    {
        id: '4',
        title: 'Dell Monitor',
        category: 'Monitor',
        price: 29995,
        description: 'Introducing the latest innovation in tech, the IpsumTech Pro X2000. With cutting-edge features and unparalleled performance, this device sets a new standard in the world of technology. Equipped with a high-resolution display and a powerful processor, it offers an exceptional user experience for both work and play. The IpsumTech Pro X2000 boasts advanced connectivity options, extended battery life, and a sleek, durable design. Whether you\'re a tech enthusiast or a professional on the go, this device is engineered to meet your needs. Experience the future of technology today with the IpsumTech Pro X2000.',
        image: mockImages[3].image,
        shippingCost: 995
    },
    {
        id: '5',
        title: 'Headset',
        category: 'Utility',
        price: 7995,
        description: 'Introducing the latest innovation in tech, the IpsumTech Pro X2000. With cutting-edge features and unparalleled performance, this device sets a new standard in the world of technology. Equipped with a high-resolution display and a powerful processor, it offers an exceptional user experience for both work and play. The IpsumTech Pro X2000 boasts advanced connectivity options, extended battery life, and a sleek, durable design. Whether you\'re a tech enthusiast or a professional on the go, this device is engineered to meet your needs. Experience the future of technology today with the IpsumTech Pro X2000.',
        image: mockImages[4].image,
        shippingCost: 0
    },
    {
        id: '6',
        title: 'Keyboard',
        category: 'Utility',
        price: 12995,
        description: 'Introducing the latest innovation in tech, the IpsumTech Pro X2000. With cutting-edge features and unparalleled performance, this device sets a new standard in the world of technology. Equipped with a high-resolution display and a powerful processor, it offers an exceptional user experience for both work and play. The IpsumTech Pro X2000 boasts advanced connectivity options, extended battery life, and a sleek, durable design. Whether you\'re a tech enthusiast or a professional on the go, this device is engineered to meet your needs. Experience the future of technology today with the IpsumTech Pro X2000.',
        image: mockImages[5].image,
        shippingCost: 0
    },
    {
        id: '7',
        title: 'Mouse',
        category: 'Utility',
        price: 3995,
        description: 'Introducing the latest innovation in tech, the IpsumTech Pro X2000. With cutting-edge features and unparalleled performance, this device sets a new standard in the world of technology. Equipped with a high-resolution display and a powerful processor, it offers an exceptional user experience for both work and play. The IpsumTech Pro X2000 boasts advanced connectivity options, extended battery life, and a sleek, durable design. Whether you\'re a tech enthusiast or a professional on the go, this device is engineered to meet your needs. Experience the future of technology today with the IpsumTech Pro X2000.',
        image: mockImages[6].image,
        shippingCost: 0
    },
]