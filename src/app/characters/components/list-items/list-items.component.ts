import { Component, Input } from '@angular/core';
import { Characters } from 'src/app/characters/models/Characters.model';
@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent {
  @Input () item!:Characters
}
