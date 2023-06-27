import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Characters } from '../../models/Characters.model';
import { CharacterDialogComponent } from '../character-dialog/character-dialog.component';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent {
  @Input() item!: Characters;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(CharacterDialogComponent, {
      width: '250px',
      data: this.item
    });
  }

}