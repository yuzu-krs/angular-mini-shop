import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //Product 型のオブジェクトの配列
  private products: Product[] = [
    {
      id: 1,
      name: 'ノートPC',
      description: '高性能ノートパソコン',
      price: 150000,
      stock: 5,
    },
    { id: 2, name: 'マウス', description: 'ワイヤレスマウス', price: 3000, stock: 20 },
    { id: 3, name: 'キーボード', description: 'メカニカルキーボード', price: 12000, stock: 10 },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
