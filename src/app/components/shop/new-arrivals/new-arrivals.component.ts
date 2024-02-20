import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../service/products.service';
import { Products } from '../../../model/products';

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.scss'
})
export class NewArrivalsComponent implements OnInit {
  products: Products[] = []

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts(4).subscribe(
      (data: any) => {
        this.products = data;
      },
    ),
    (error: any) => {
      console.log('Error: ', error)
    }
  }
}
