
import { Component } from '@angular/core';
import { Characters} from '../../models/Characters.model';
import { CharactersService } from '../../service/characters.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
 characters:Characters[] = []

 constructor(private characterService:CharactersService) {}

 ngOnInit(){
  this.characterService.getAll().subscribe(
    (character:any)=> {this.characters = character.data
    });

 }
}
