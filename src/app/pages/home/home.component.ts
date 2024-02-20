import { Component } from '@angular/core';
import { ExploreComponent } from '../../components/shop/explore/explore.component';
import { NewArrivalsComponent } from '../../components/shop/new-arrivals/new-arrivals.component';
import { BigSavingsComponent } from '../../components/shop/big-savings/big-savings.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ExploreComponent,
    NewArrivalsComponent,
    BigSavingsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
