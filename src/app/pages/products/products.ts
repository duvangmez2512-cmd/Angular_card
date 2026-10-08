import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  products = [
  {
    name: 'iPhone 15 Pro',
    avalible: true,
    price: 999,
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc'
  },
  {
    name: 'MacBook Pro 14"',
    avalible: true,
    price: 1999,
    image: 'https://tse3.mm.bing.net/th/id/OIP.C6_7Iv6Ento5iNepcxMgpAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    name: 'AirPods Pro',
    avalible: true,
    price: 249,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1'
  },
  {
    name: 'Apple Watch Series 9',
    avalible: true,
    price: 399,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12'
  },
  {
    name: 'Sony WH-1000XM5',
    avalible: true,
    price: 399,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb'
  },
  {
    name: 'Nike Air Max 270',
    avalible: true,
    price: 150,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
  },
  {
    name: 'Canon EOS R6',
    avalible: true,
    price: 2499,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32'
  },
  {
    name: 'Samsung Galaxy S24',
    avalible: true,
    price: 799,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf'
  },
  {
    name: 'Nike Air Jordan 1',
    avalible: true,
    price: 180,
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3'
  },
  {
    name: 'PlayStation 5',
    avalible: true,
    price: 499,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db'
  }
];








}
