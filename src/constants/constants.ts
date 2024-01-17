import { Option } from '../types/optionTypes'; // Replace '../types' with the actual path

export const sidebarOptions = [
    {
        name: 'Home',
        path: '/',
        header: 'Home'
    },
    {
        name: 'About',
        path: '/about',
        header: 'About'
    },
    {
        name: 'Product',
        path: '/product/tv_collection',
        header: 'TV Collection'
    },
    {
        name: 'Pages',
        path: '/pages',
        header: 'Pages'
    },
    {
        name: 'Contact',
        path: '/contact',
        header: 'Contact'
    },
];


export const categoryOptions: Option[] = [
    { value: 'all', text: 'All Categories' },
    { value: 'tv', text: 'TV' },
    { value: 'mobile', text: 'Mobile' },
    { value: 'laptops', text: 'Laptops' },
];

export const footerInformation = [
    'About',
    'Delivery information',
    'Privacy Policy',
    'Sales',
    'Terms & Conditions',
    'EMI Payment',
];

export const aboutUs =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec laoreet.';

    
export const footerAccount = [
    'My Account',
    'My Orders',
    'Returns',
    'Shipping',
    'Wishlist',
    'Account Details',
];
export const storeDetails = ['Affiliate', 'Discounts', 'Sales', 'Contact', 'All Collections'];
export const socialIcons = [
    '/assets/images/facebook.webp',
    '/assets/images/instagram.webp',
    '/assets/images/skype.webp',
    '/assets/images/youtube.webp',
];

export const productFilters =
[
    {
        "label": "Television"
    },
    {
        "label": "Mobile"
    },
    {
        "label": "Laptop"
    }
]