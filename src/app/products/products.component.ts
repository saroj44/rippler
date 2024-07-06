import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [{
    image_name:'Image-Master.png',
    category:'Burberry',
    product_name:'Flowy Dress with pink and gold',
    rrp_price:129.99,
    rental_price:12,
    size:4
  },
  {
    image_name:'Image-Master-2.png',
    category:'Prada',
    product_name:'Beach dress',
    rrp_price:129.99,
    rental_price:12,
    size:8
  },
  {
    image_name:'Image-Master-1.png',
    category:'Bhandage',
    product_name:'Red dress for evening wear',
    rrp_price:129.99,
    rental_price:12,
    size:12
  },
  {
    image_name:'Image-Master-3.png',
    category:'Preda',
    product_name:'Wedding guest',
    rrp_price:129.99,
    rental_price:12,
    size:12
  },
  {
    image_name:'Image-Master-4.png',
    category:'Ansell',
    product_name:'Nightwear',
    rrp_price:129.99,
    rental_price:12,
    size:14
  },
  {
    image_name:'Image-Master-5.png',
    category:'Desacada',
    product_name:'Summer dress',
    rrp_price:129.99,
    rental_price:12,
    size:8
  }
  ]; 
  constructor() { }
  ngOnInit(): void {

  }
}
