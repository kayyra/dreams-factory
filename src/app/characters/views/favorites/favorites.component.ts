import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  formularioVisible: boolean = false;

  toggleForm() {
    this.formularioVisible = !this.formularioVisible;
  }
}
