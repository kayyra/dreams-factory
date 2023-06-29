import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface CharacterData {
  name: string;
  tvShows: string;
  films: string[];
  videoGames: string[];
}

@Component({
  selector: 'app-character-dialog',
  templateUrl: 'character-dialog.component.html',
  styleUrls: ['./character-dialog.component.scss']
})
export class CharacterDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CharacterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CharacterData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
