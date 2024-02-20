import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-big-savings',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './big-savings.component.html',
  styleUrl: './big-savings.component.scss'
})
export class BigSavingsComponent {
  faArrowDown = faArrowDown
}
