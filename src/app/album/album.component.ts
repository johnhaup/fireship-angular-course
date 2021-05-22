import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent {
  @Input() album: { name: string; year: string; image: string } | null = null;
}
