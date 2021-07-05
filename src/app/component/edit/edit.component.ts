import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ElkService} from '../../services/elk.service'
import {TName} from '../../model/template-model'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  templetename:string=""
  templateinfo:TName={"index_patterns":[]}
  templatedata:any

  name:string=""
  
  Confirmation: String = "Template Updated Succesfully";
  index_patterns:string="";
  number_of_shards:string="1"
  index=0
  number_of_replicas:string=""

  constructor(private router:ActivatedRoute ,private elk:ElkService) { }

  ngOnInit(): void {
    this.templetename= this.router.snapshot.params.templatename
    //console.log(this.templetename)
    //this.elk.getTemplateData(this.templetename).subscribe(data=>{this.templateinfo=data})
    //console.log(this.templateinfo)
    console.log(this.getTemplateData(this.templetename))
  //this.getTemplateData(this.templetename)
 
  }

  getTemplateData(templatename:string):any{
    this.elk.getTemplateData(templatename).subscribe(data=>
     {
       this.templateinfo=data 
      // console.log(this.templateinfo)
    })
   }

   updateMappingProperties()
   {  
    console.log(this.templateinfo.index_patterns)
    for(let obj in this.templateinfo)
    {
      console.log(obj)
      
    }
    const index_optional= this.templateinfo.settings?.index
    if(index_optional) {console.log(index_optional.number_of_shards)}
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


