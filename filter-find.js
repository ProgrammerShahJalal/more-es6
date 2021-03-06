const numbers = [5, 13, 34, 50, 15, 17, 2, 4, 8];
const smallnumbers = numbers.filter(number => number < 10);
const bigNumbers = numbers.filter(number => number > 20);
console.log(smallnumbers, bigNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const expensive = products.filter(product => product.price > 100);
const blacks = products.filter(product => product.color == 'black');
const whiteItems = products.find(product => product.color == 'pink');
console.log(whiteItems);