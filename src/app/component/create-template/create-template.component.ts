import { Component, OnInit } from '@angular/core';
import { ElkService } from '../../services/elk.service';
import { MatDialog } from '@angular/material/dialog';
import {TName, Attributes, Mapper, Property, Mappings,Settings,Index} from '../../model/template-model';
import { MappingDialerComponent } from '../mapping-dialer/mapping-dialer.component'


@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {
  
  //Without template
  objTemplate: TName={"index_patterns":[]}
  
  //With template
  t_index: Index={number_of_shards:"1"}
  t_settings:Settings={"index":this.t_index}
  t_property: Property={};
  t_mappings: Mappings={"dynamic":true, "properties":this.t_property}
  
  objWithTemplate: TName={"index_patterns":[],"settings":this.t_settings,"mappings":this.t_mappings}
  
  name:string=""
  mapping:Array<Attributes>=[];
  Confirmation: String = " Template Created Succesfully";
  isConfirm:boolean=false
  index_patterns:string="";
  number_of_shards:string="1"
  index=0
  property:Property={}
  number_of_replicas:string=""

  constructor(private dialog:MatDialog, private elk:ElkService) {}
  
  ngOnInit(): void {
  }
  
  openDialog() {
    const dialogRef = this.dialog.open(MappingDialerComponent, {
      width: '500px',
      height:'500px',
      data:this.mapping
    });
    dialogRef.afterClosed().subscribe(result=> {
      //error can be handled here
      this.mapping=result.data
      this.property = this.getMap()
    });
  }
  
  createTemplate(){
    this.isConfirm=true
    let patterns=this.index_patterns.split(',')
    const index_optional= this.objWithTemplate.settings?.index 
    
    if (patterns.length>0 && this.index>0){
      this.objWithTemplate.index_patterns = patterns
      if (index_optional) index_optional.number_of_shards = this.number_of_shards
      if (index_optional) index_optional.number_of_replicas = this.number_of_replicas

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

  closeAlert()
  {
   this.isConfirm=false
  }

}

    

