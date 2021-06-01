import { Component, OnInit } from '@angular/core';
import { ElkService} from '../../services/elk.service'


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  templates: any=[]
 
  page: number=1
  totalRecords: any
  ovalue : any=[]
  Object = Object;
  ojson=Object
  
  constructor(private elk:ElkService){}
  ngOnInit(): void {

  }

 

}
