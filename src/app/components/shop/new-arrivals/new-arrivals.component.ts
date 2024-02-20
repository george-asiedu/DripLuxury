import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../service/products.service';
import { Products } from '../../../model/products';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.scss'
})
export class NewArrivalsComponent implements OnInit {
  products: Products[] = []
  loading: boolean = true
  error: string = ''
  faArrowRight = faArrowRight

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts(4).subscribe(
      (data: any) => {
        this.products = data
        this.loading  = false
      },
    ),
    (error: string) => {
      this.error = error
    }
  }
}
