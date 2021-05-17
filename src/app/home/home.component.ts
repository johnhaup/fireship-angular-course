import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  clicked = false;
  title = `ANGULAR ${VERSION.full} is the version used in this cool app.`;
  surprise = 'You clicked the button, silly';

  albums = [
    {
      name: 'Hormoaning',
      year: '1992',
      image: 'assets/hormoaning.jpeg',
    },
    {
      name: 'In Utero',
      year: '1993',
      image: 'assets/nirvana-in-utero.jpeg',
    },
  ];

  handleClick(): void {
    this.clicked = true;
  }
}
