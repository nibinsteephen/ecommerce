export const adminList = [
    {
        image: "/icons/dashboard.svg",
        name: "Dashboard",
        link: "/dashboard",
    },
    {
        image: "/icons/orders.svg",
        name: "Orders",
        link: "/orders",
    },
];

export const oneRupeeList = [
    {
        image: "/icons/attributes.svg",
        name: "Attributes",
        link: "/attributes",
    },
    {
        image: "/icons/products.svg",
        name: "Products",
        link: "/products",
    },
    {
        image: "/icons/inventory.svg",
        name: "Inventory",
        link: "/inventory",
    },
    {
        image: "/icons/account.svg",
        name: "Account",
        link: "/account",
    },
    {
        image: "/icons/brands.svg",
        name: "Brands",
        link: "/brands",
    },
    {
        image: "/icons/store.svg",
        name: "Store",
        link: "/store",
    },
    {
        image: "/icons/marketing.svg",
        name: "Marketing",
        link: "/marketing",
    },
    {
        image: "/icons/user-role.svg",
        name: "User Roll",
        link: "/user-roll",
    },
    {
        image: "/icons/customers.svg",
        name: "Customers",
        link: "/customers",
    }
];


export const category_sections = [
    {
        id: 1,
        name: "Kids & Toys"
    },
    {
        id: 2,
        name: "Men"
    },
    {
        id: 3,
        name: "Women"
    },
    {
        id: 4,
        name: "Electronics"
    }
];

export const generateProductOptions = (categoryId) => {
    switch (categoryId) {
        case 1: // Kids & Toys
            return [
                { value: "toys", name: "Toys" },
                { value: "unisex", name: "Unisex" },
                { value: "dolls", name: "Dolls" },
                { value: "games", name: "Games" }
            ];
        case 2: // Men
            return [
                { value: "shirts", name: "Shirts" },
                { value: "pants", name: "Pants" },
                { value: "shoes", name: "Shoes" },
                { value: "accessories", name: "Accessories" }
            ];
        case 3: // Women
            return [
                { value: "dresses", name: "Dresses" },
                { value: "shoes", name: "Shoes" },
                { value: "jewelry", name: "Jewelry" },
                { value: "bags", name: "Bags" }
            ];
        case 4: // Electronics
            return [
                { value: "phones", name: "Phones" },
                { value: "laptops", name: "Laptops" },
                { value: "cameras", name: "Cameras" },
                { value: "accessories", name: "Accessories" }
            ];
        default:
            return [];
    }
};


// const selectedCategoryId = 1; // For Kids & Toys
// const productOptions = generateProductOptions(selectedCategoryId);
// console.log(productOptions);
