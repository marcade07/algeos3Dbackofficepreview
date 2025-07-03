import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Product } from '../../interfaces/common.interfaces';

@Component({
  selector: 'app-other-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './other-products.component.html',
  styleUrl: './other-products.component.scss'
})
export class OtherProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';
  productTypeFilter: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getOtherProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           product.code.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesType = !this.productTypeFilter || product.productType === this.productTypeFilter;
      return matchesSearch && matchesType;
    });
  }
}