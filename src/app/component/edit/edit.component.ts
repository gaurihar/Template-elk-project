import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ElkService} from '../../services/elk.service'
import { Property, Settings,Index,TName,Mappings,Lifecycle,Attributes,Mapper} from '../../model/template-model'
import{MappingPropertiesComponent} from '../mapping-properties/mapping-properties.component'

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
  //mapping
  

  //Original Index (global Values)
  g_Setting:any
  g_Mapping:any
  g_Aliases:any
  g_Property:Property={}
  //Setting Parameters
  lifecycle?: Lifecycle
  name:string=""
  rollover_alias?:string
  number_of_shards: string ="1";
  auto_expand_replicas?: string;
  number_of_replicas?: string;
  format?: string;
  refresh_interval?: string;
  priority?: string;
  hidden?:boolean

  //mapping properties
  stringifiedData_property:any
  parsedJson_property:any
  map_attibutes:any
  mapping:Array<Attributes>=[];
  property:Property={}

 



  objTemplate: TName={"index_patterns":[]}
  isProperty:boolean=false
  
  
  updatedTemplate:TName={"index_patterns":[]}

  templatedata:any
  
  stringifiedData: any;  
  parsedJson: any;

  Confirmation: String = "Template Updated Succesfully";
  index_patterns:string="";
  index=0
 
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
      this.g_Property=this.parsedJson[this.templetename]["mappings"]["properties"]
      console.log( "property",this.g_Property)

      this.g_Aliases=this.parsedJson[this.templetename]["aliases"]
      this.index_patterns=this.parsedJson[this.templetename]["index_patterns"]
      //Setting
      this.number_of_shards=this.parsedJson[this.templetename]["settings"]["index"].number_of_shards
      this.number_of_replicas=this.parsedJson[this.templetename]["settings"]["index"].number_of_replicas
      this.auto_expand_replicas=this.parsedJson[this.templetename]["settings"]["index"].auto_expand_replicas
      this.format= this.parsedJson[this.templetename]["settings"]["index"].format
      this.hidden= this.parsedJson[this.templetename]["settings"]["index"].hidden
      this.priority= this.parsedJson[this.templetename]["settings"]["index"].priority
      this.refresh_interval=this.parsedJson[this.templetename]["settings"]["index"].refresh_interval
      this.lifecycle=this.parsedJson[this.templetename]["settings"]["index"]["lifecycle"]
     // this.name=this.parsedJson[this.templetename]["settings"]["index"]["lifecycle"].name
     // this.rollover_alias=this.parsedJson[this.templetename]["settings"]["index"]["lifecycle"].rollover_alias
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
   onSubmitSetting(){
    console.log("You are in update template Setting")
    console.log(this.auto_expand_replicas)
    console.log(this.number_of_shards)
    console.log(this.number_of_replicas)
    var localSettings:Settings
    // let patterns=this.index_patterns.split(',')
    this.updatedTemplate.index_patterns = this.parsedJson[this.templetename]["index_patterns"]
     this.updatedTemplate.mappings = this.g_Mapping
     this.updatedTemplate.aliases=this.g_Aliases
     localSettings=this.parsedJson[this.templetename]["settings"]
     localSettings.index.number_of_shards=this.number_of_shards
     localSettings.index.number_of_replicas=this.number_of_replicas
     localSettings.index.auto_expand_replicas=this.auto_expand_replicas
     localSettings.index.format=this.format
     localSettings.index.hidden=this.hidden
     localSettings.index.priority=this.priority
     var l_lifecycle:Lifecycle
  //    //this.lifecycle=this.updatedTemplate.settings?.index.lifecycle
    
  //   l_lifecycle.rollover_alias=this.rollover_alias
  //    localSettings.index.lifecycle=l_lifecycle
  // //   l_lifecycle.rollover_alias=this.rollover_alias
  //    //sl_lifecycle.rollover_alias=this.rollover_alias 

  //    //this.lifecycle?.name=localSettings.index.lifecycle?.name
     l_lifecycle=this.parsedJson[this.templetename]["settings"]["index"]["lifecycle"]
   // l_lifecycle.name=this.name
    //sl_lifecycle.rollover_alias=this.rollover_alias
     this.updatedTemplate.settings=localSettings
     this.elk.createTemplate(this.updatedTemplate, this.templetename).subscribe(res => {})

   }
  
  updateMappingProperties()
  { 
    this.isPropertyMapping=true
    this.isAliases=false
    this.isIndexUpdate=false
    this.isSetting=false

    


    //adding two new property map
    // property["naya"] = {"type": "float"}
    // property["datefield"] = {"type": "date", "format": "%d-%m-%Y"}
    // this.parsedJson[this.templetename]["mappings"]["properties"] = property
    // console.log(this.parsedJson[this.templetename]["mappings"]["properties"])
    // console.log(property)
    // console.log(this.parsedJson)

  }

  getMap(){
    let PropertyObj: Property={};
    this.index=0
    for(let i=0;i<this.mapping.length;i++){
      var key = this.mapping[i].name
      
      if (this.mapping[i].format == ""  || this.mapping[i].format ==null && key!= ""){  
        let item: Mapper={"type":""};
        item["type"] = this.mapping[i].type
        PropertyObj[key] = item
        this.index+=1
      }
      
      else if (key!= ""){
        let item:Mapper = {"type":"", "format":""}
        item["type"] = this.mapping[i].type
        item["format"] = this.mapping[i].format+""
        PropertyObj[key] = item
        this.index+=1
      }
    }
    return PropertyObj
  }
  onSubmitProperty(event:Event)
  {
    console.log("You are in mapping property")
    console.log(event)
    var map1:Mappings
    //property = this.parsedJson[this.templetename]["mappings"]["properties"]
    this.updatedTemplate.index_patterns = this.parsedJson[this.templetename]["index_patterns"]
    this.updatedTemplate.aliases=this.g_Aliases
    this.updatedTemplate.settings=this.g_Setting
    map1=this.parsedJson[this.templetename]["mappings"]

    this.stringifiedData_property = JSON.stringify(event)
    console.log(this.stringifiedData_property)

    this.parsedJson_property = JSON.parse(this.stringifiedData_property) 
    console.log(this.parsedJson_property)
    this.map_attibutes=this.parsedJson_property["attribute"]
  //   console.log(this.map_attibutes)
    this.mapping=this.map_attibutes
    this.property=this.getMap()
  //  // this.updatedTemplate.mappings?.properties=this.g_Property
    map1.properties=this.property
    this.updatedTemplate.mappings=map1
  //   console.log("****",map1)
    console.log("gpropery",this.property)
    this.elk.createTemplate(this.updatedTemplate, this.templetename).subscribe(res => {})
      

  }
  
   

   updateTemplateAlias()
   {

   }

   
   updateTemplateCluster()
   {
     
   }
  }