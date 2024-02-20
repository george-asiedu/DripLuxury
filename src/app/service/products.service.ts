import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://mock.shop/api';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    const query = `
      {
        products(first: 20) {
          edges {
            node {
              id
              title
              description
              featuredImage {
                id
                url
              }
              variants(first: 3) {
                edges {
                  node {
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    return this.http.get<any>(`${this.apiUrl}?query=${query}`).pipe(
      map(response => response.data.products.edges.map((edge: any) => edge.node))
    );
  }
}