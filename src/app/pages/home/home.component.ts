import { Component } from '@angular/core';
import { ExploreComponent } from '../../components/shop/explore/explore.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ExploreComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
