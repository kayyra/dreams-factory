import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-hamb',
  templateUrl: './menu-hamb.component.html',
  styleUrls: ['./menu-hamb.component.scss']
})
export class MenuHambComponent implements OnInit{

  public active : boolean = false

  constructor(){ }
  ngOnInit(): void {}  

  setActive() :void{
    this.active = !this.active
  }
 
}
