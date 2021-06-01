import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-menu',
  templateUrl: './template-menu.component.html',
  styleUrls: ['./template-menu.component.css']
})
export class TemplateMenuComponent implements OnInit {

  isAllTemplate:boolean=false
  isDefault:boolean=true

  constructor() { }

  ngOnInit(): void {
  }

  allTemplate(){
    this.isAllTemplate=true
    this.isDefault=false
  }
}


