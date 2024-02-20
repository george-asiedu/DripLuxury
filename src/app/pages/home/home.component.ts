import { Component } from '@angular/core';
import { ExploreComponent } from '../../components/shop/explore/explore.component';
import { NewArrivalsComponent } from '../../components/shop/new-arrivals/new-arrivals.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ExploreComponent,
    NewArrivalsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
