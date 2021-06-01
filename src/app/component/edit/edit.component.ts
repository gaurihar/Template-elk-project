import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  templetename:any

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
   this.templetename= this.router.snapshot.params.templatename
   console.log(this.templetename)
   }
   
   updateMappingProperties()
   {

   }
   updateTemplateSetting()
   {

   }

   updateTemplateAliase()
   {

   }

   updateTemplateIndexPattern()
   {

   }
   updateTemplateCluster()
   {
     
   }


   
  }


