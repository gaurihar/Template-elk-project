import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ElkService} from '../../services/elk.service'
import {ElkTemplate, Property, Settings,Index,TName,Mappings} from '../../model/template-model'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  isPropertyMapping:boolean=false
  isIndexUpdate:boolean=false
  isAliases:boolean=false
  isSetting:boolean=false
  templetename:string=""

  //Local changes
  l_index_patterns:string=""
  l_TemplateName:string=""
  l_Setting:any
  //Original Index (global Values)
  g_Setting:any
  g_Mapping:any
  g_Aliases:any
  

  objTemplate: TName={"index_patterns":[]}
  isProperty:boolean=false
  
  updatedTemplate:TName={"index_patterns":[]}

  elkTemplate:ElkTemplate={"name":"","tinfo":{"index_patterns":[]}}
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
      this.g_Setting=this.parsedJson[this.templetename]["settings"]
      this.g_Mapping=this.parsedJson[this.templetename]["mappings"]
      this.g_Aliases=this.parsedJson[this.templetename]["aliases"]

    })
   }
  
  
  
   updateTemplateIndexPattern()
   {
    this.isPropertyMapping=false
    this.isAliases=false
    this.isIndexUpdate=true
    this.isSetting=false

    var localIndexData:string[]
    //console.log(this.parsedJson[this.templetename]["index_patterns"])
   this.l_index_patterns = this.parsedJson[this.templetename]["index_patterns"]
    
    //adding and removing index pattern locally
    // localIndexData.push("gauri*")
    // localIndexData.forEach((element,index)=>{
    //   if(element=="k*") delete localIndexData[index];
    // });

    // this.parsedJson[this.templetename]["index_patterns"] = localIndexData
    // console.log(this.parsedJson)
   
  }
  onSubmitIndex()
  {
    // console.log("you are in index function")
    // console.log(this.l_index_patterns)
    //console.log(this.parsedJson)
    // //let patterns=this.l_index_patterns.split(',')
    // this.updatedTemplate.index_patterns=this.l_index_patterns
    // this.updatedTemplate.mappings=this.g_Mapping
    // this.updatedTemplate.settings=this.g_Setting
    // this.updatedTemplate.aliases=this.g_Aliases
     
    // console.log(this.g_Setting)
    // console.log(this.g_Mapping)
    // console.log(this.g_Aliases)
   //console.log(this.l_index_patterns)
    let patterns=this.l_index_patterns.split(',')
    this.updatedTemplate.index_patterns = patterns
    this.updatedTemplate.mappings = this.g_Mapping
    this.updatedTemplate.aliases=this.g_Aliases
    this.updatedTemplate.settings=this.g_Setting
    this.elk.createTemplate(this.updatedTemplate, this.templetename).subscribe(res => {})
      

  }
  
   updateMappingProperties()
  { 
    this.isPropertyMapping=true
    this.isAliases=false
    this.isIndexUpdate=false
    this.isSetting=false

    var property:Property
    property = this.parsedJson[this.templetename]["mappings"]["properties"]
    
    //adding two new property map
    // property["naya"] = {"type": "float"}
    // property["datefield"] = {"type": "date", "format": "%d-%m-%Y"}
    // this.parsedJson[this.templetename]["mappings"]["properties"] = property
    // console.log(this.parsedJson[this.templetename]["mappings"]["properties"])
    // console.log(property)
    // console.log(this.parsedJson)
  }
  
   updateTemplateSetting()
   {
    this.isPropertyMapping=false
    this.isAliases=false
    this.isIndexUpdate=false
    this.isSetting=true

      // var localSettings:Settings
      // localSettings = this.parsedJson[this.templetename]["settings"]
      // console.log(localSettings.index.number_of_replicas)
      // //setting local update
      // localSettings.index.number_of_replicas = "2"
      // this.parsedJson[this.templetename]["settings"] = localSettings
      // console.log(localSettings)
      // console.log(this.parsedJson)  
   }

   updateTemplateAlias()
   {

   }

   
   updateTemplateCluster()
   {
     
   }
  }