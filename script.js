// script.js - Zain Store JavaScript (Complete functionality)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// All Products Data (add your real products here)
const products = [
    { id: 1, name: 'Wireless Headphones Pro', price: 99, img: 'https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Headphones' },
    { id: 2, name: 'Smart Watch Ultra', price: 199, img: 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=Watch' },
    { id: 3, name: 'Laptop Stand Premium', price: 49, img: 'https://via.placeholder.com/400x300/0f0f23/ffffff?text=Stand' },
    { id: 4, name: 'Bluetooth Speaker Max', price: 79, img: 'https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Speaker' },
    { id: 5, name: 'Gaming Mouse RGB', price: 59, img: 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=Mouse' },
    { id: 6, name: 'Mechanical Keyboard', price: 129, img: 'https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Keyboard' }
];

// Render
