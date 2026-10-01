import {
    ChefHat,
    ShoppingBag,
    Sun,
    Utensils
} from 'lucide-react';

export const products = [
    {
        id: 1,
        name: 'Sizzling Sisig with Rice',
        category: 'Rice Meals',
        price: 100,
        oldPrice: 120,
        rating: 4.9,
        time: '15–20 min',
        image: '/images/sisig.png',
        description:
            'Crispy, savory pork sisig served sizzling hot with a generous cup of steamed rice.',
        tag: 'Bestseller',
        stock: 23
    },
    {
        id: 2,
        name: 'Tapsilog',
        category: 'Rice Meals',
        price: 90,
        rating: 4.8,
        time: '10–15 min',
        image: '/images/tapsilog.png',
        description:
            'Sweet and savory beef tapa with garlic rice and a sunny-side-up egg.',
        tag: 'Student favorite',
        stock: 23
    },
    {
        id: 3,
        name: 'Chicken Kare-Kare',
        category: 'Rice Meals',
        price: 120,
        rating: 4.7,
        time: '20–25 min',
        image: '/images/karekare.png',
        description:
            'Comforting kare-kare inspired sauce with tender chicken and rice.',
        tag: 'Hearty meal',
        stock: 15
    },
    {
        id: 4,
        name: 'Beef Tapa Bowl',
        category: 'Rice Meals',
        price: 115,
        rating: 4.8,
        time: '15–20 min',
        image: '/images/beef-talpicao.png',
        description:
            'Tender beef tossed in a rich, savory sauce, made for a filling campus lunch.',
        tag: 'Popular',
        stock: 12
    },
    {
        id: 5,
        name: 'Cheese Pizza',
        category: 'Snacks',
        price: 150,
        rating: 4.6,
        time: '20–25 min',
        image: '/images/cheese-pizza.png',
        description:
            'Golden baked pizza with a generous layer of melted cheese.',
        tag: 'Shareable',
        stock: 8
    },
    {
        id: 6,
        name: 'Pepperoni Pizza',
        category: 'Snacks',
        price: 170,
        rating: 4.8,
        time: '20–25 min',
        image: '/images/pepperoni-pizza.png',
        description:
            'A classic cheesy pizza topped with savory pepperoni slices.',
        tag: 'New',
        stock: 6
    }
];

export const categories = [
    {
        name: 'All',
        icon: Utensils
    },
    {
        name: 'Rice Meals',
        icon: ChefHat
    },
    {
        name: 'Snacks',
        icon: ShoppingBag
    },
    {
        name: 'Drinks',
        icon: Sun
    }
];

export const money = (value) =>
    `₱${Number(value).toLocaleString('en-PH', {
        maximumFractionDigits: 2
    })}`;
