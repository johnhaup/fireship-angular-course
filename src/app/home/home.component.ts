import {
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  VERSION,
} from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent
  implements OnInit, OnDestroy, AfterViewInit, DoCheck
{
  albums: Observable<{ name: string; year: string; image: string }[]> = of([]);
  clicked = false;
  title = `ANGULAR ${VERSION.full} is the version used in this cool app.`;
  surprise = 'You clicked the button, silly';

  constructor() {}

  ngOnInit(): void {
    // Where you do all your lifecycle setup aka componentDidMount aka useEffect
    this.albums = of([
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
    ]);
  }

  ngDoCheck(): void {
    console.log('Change detected');
    // Catches change detection
    // Not typically used for significant changes
    // Mostly a debug tool
  }

  ngAfterViewInit(): void {
    // Ensure child views are loaded
  }

  ngOnDestroy(): void {
    // Unsubcribe, etc.
  }

  handleClick(): void {
    this.clicked = true;
  }
}
