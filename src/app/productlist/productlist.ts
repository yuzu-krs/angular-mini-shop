import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-productlist',
  imports: [DecimalPipe],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist implements OnInit {
  products: Product[] = [];
  totalProducts: number = 0;
  totalValue: number = 0;
  selectedProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.calculateStats();
  }

  // 初期値 sum = 0
  // pは今見ている商品
  // p.price * p.stock でその商品の在庫を計算
  calculateStats(): void {
    this.totalProducts = this.products.length;
    this.totalValue = this.products.reduce((sum, p) => sum + p.price * p.stock, 0);
  }

  onProductClick(product: Product): void {
    this.selectedProduct = product;
    console.log('選択した商品:', product);
  }
  onAddToCart(product: Product): void {
    console.log('カートに追加:', product.name);
  }

  onClearSelection(): void {
    this.selectedProduct = null;
  }
}
