import { Component, OnInit } from '@angular/core';
import { ElkService } from '../../services/elk.service';
import { MatDialog } from '@angular/material/dialog';
import {TName, Attributes, Mapper, Property, Template, Mappings,Settings,Index} from '../../model/template-model';
//import { MappingDialerComponent } from '../mapping-dialer/mapping-dialer.component'


@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {
  
  //Without template
  objTemplate: TName={"index_patterns":[]}
  isProperty:boolean=false
  //With template
  t_index: Index={number_of_shards:"1"}
  t_settings:Settings={"index":this.t_index}
  t_property: Property={};
  t_mappings: Mappings={"dynamic":true, "properties":this.t_property}
  
  objWithTemplate: TName={"index_patterns":[],"settings":this.t_settings,"mappings":this.t_mappings}
  
  name:string=""
  mapping:Array<Attributes>=[];
  Confirmation: String = "";
  index_patterns:string="";
  number_of_shards:string="1"
  index=0
  property:Property={}
  p:any
  stringifiedData :any
  parsedJson:any
  map_attibutes:any
  constructor(private dialog:MatDialog, private elk:ElkService) {}
  
  ngOnInit(): void {
  }
  
  // openDialog() {
  //   const dialogRef = this.dialog.open(MappingDialerComponent, {
  //     width: '1298px',
  //     height:'981px',
  //     data:this.mapping
      
  //   });
  //   console.log(this.mapping)
  //   dialogRef.afterClosed().subscribe(result=> {
  //     //error can be handled here
  //     this.mapping=result.data
  //     this.property = this.getMap()
  //   });
  //   console.log(this.property)
  // }
  
  createTemplate(){
    let patterns=this.index_patterns.split(',')
   
    if (patterns.length>0 && this.index>0){
      
      this.objWithTemplate.index_patterns = patterns
      this.t_property = this.property
      this.t_mappings.properties = this.t_property
      
      this.elk.createTemplate(this.objWithTemplate, this.name).subscribe(res => {})
    }
    else if(patterns.length>0){
      this.objTemplate.index_patterns = patterns
      this.elk.createTemplate(this.objTemplate, this.name).subscribe(res => {})
    }
    this.index_patterns="";
    this.name="";
  }


  cancel(){
    this.index_patterns="";
    this.name="";
  }


  getIndexTemplateObject(index_patterns:string[], mapping_count:number){
    
  }
  
  getMap(){
    let PropertyObj: Property={};
    this.index=0
    for(let i=0;i<this.mapping.length;i++){
      var key = this.mapping[i].name
      
      if (this.mapping[i].format == "" && key!= ""){  
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

  newMap()
  {
  this.isProperty=true
  }
  newProperties(event:Event)
  {
    console.log("you are in carete Template")
    console.log(event)
    this.stringifiedData = JSON.stringify(event)
    this.parsedJson = JSON.parse(this.stringifiedData) 
    //console.log(this.parsedJson["attribute"])
    this.map_attibutes=this.parsedJson["attribute"]
    console.log(this.map_attibutes)
    this.mapping=this.map_attibutes
    this.property=this.getMap()
   
    
  }

}

    

//[{…}]0: {name: "a1", type: "integer", format: ""}length: 1__proto__: Array(0)

// attribute: Array(1)
// 0: {aname: "a1", type: "integer", format: ""}
// length: 1
// __proto__: Array(0)
// __proto__: Object
