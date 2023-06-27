import { Component , OnInit} from '@angular/core';
import { Characters} from '../../../characters/models/Characters.model';
import { CharactersService } from '../../../characters/service/characters.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit { 
  characters: Characters[] = [];
  randomCharacter?: Characters;

  constructor(private characterService: CharactersService) {}

  ngOnInit() {
    this.characterService.getAll().subscribe((character: any) => {
      this.characters = character.data;
      this.randomCharacter = this.characters[Math.floor(Math.random() * this.characters.length)];
    });
  }
}
