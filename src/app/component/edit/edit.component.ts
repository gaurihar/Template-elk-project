import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ElkService} from '../../services/elk.service'
import {ElkTemplate, Property, Settings} from '../../model/template-model'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  isIndexUpdate:boolean=false
  isPropertyUpdate:boolean=false
  isSettingUpdate:boolean=false
  templetename:string=""
  //elkTemplate:ElkTemplate={"name":"","tinfo":{"index_patterns":[]}}
  templatedata:any
  name:string=""
  stringifiedData: any;  
  parsedJson: any;

  Confirmation: String = "Template Updated Succesfully";
  index_patterns:string="";
  number_of_shards:string="1"
  index=0
  number_of_replicas:string=""

  constructor(private router:ActivatedRoute ,private elk:ElkService) { }

  ngOnInit(): void {
    this.templetename= this.router.snapshot.params.templatename
    this.getTemplateData(this.templetename)
    // console.log(this.templateinfo)
  }

  getTemplateData(templatename:string):any{
    this.elk.getTemplateData(templatename).subscribe(data=>
     {
      this.stringifiedData = JSON.stringify(data)
      this.parsedJson = JSON.parse(this.stringifiedData) 
    })
   }
  
  updateMappingProperties()
  { 
   this.isIndexUpdate=false
  this.isPropertyUpdate=true
  this.isSettingUpdate=false
    var property:Property
    property = this.parsedJson[this.templetename]["mappings"]["properties"]
    
    //adding two new property map
    property["naya"] = {"type": "float"}
    property["datefield"] = {"type": "date", "format": "%d-%m-%Y"}
    this.parsedJson[this.templetename]["mappings"]["properties"] = property
    console.log(this.parsedJson[this.templetename]["mappings"]["properties"])
    console.log(property)
    console.log(this.parsedJson)
  }
  
   updateTemplateSetting()
   {
    this.isIndexUpdate=false
    this.isPropertyUpdate=false
    this.isSettingUpdate=true
      var localSettings:Settings
      localSettings = this.parsedJson[this.templetename]["settings"]
      console.log(localSettings.index.number_of_replicas)
      //setting local update
      localSettings.index.number_of_replicas = "2"
      this.parsedJson[this.templetename]["settings"] = localSettings
      console.log(localSettings)
      console.log(this.parsedJson)  
   }

   updateTemplateAlias()
   {

   }

   updateTemplateIndexPattern()
   {
    this.isIndexUpdate=true
    this.isPropertyUpdate=false
    this.isSettingUpdate=false
    var localIndexData:string[]
    console.log(this.parsedJson[this.templetename]["index_patterns"])
    localIndexData = this.parsedJson[this.templetename]["index_patterns"]
    
    //adding and removing index pattern locally
    localIndexData.push("gauri*")
    localIndexData.forEach((element,index)=>{
      if(element=="k*") delete localIndexData[index];
    });

    this.parsedJson[this.templetename]["index_patterns"] = localIndexData
    console.log(this.parsedJson)
   
  }
   updateTemplateCluster()
   {
     
   }


   
  }