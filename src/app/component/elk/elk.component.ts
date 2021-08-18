import { KeyValuePipe } from '@angular/common';
import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { ElkService} from '../../services/elk.service'
import {Router, ROUTES} from '@angular/router'



@Component({
  selector: 'app-elk',
  templateUrl: './elk.component.html',
  styleUrls: ['./elk.component.css']
})
export class ElkComponent implements OnInit {
  templates: any=[]
  stringifiedData:any
  parsedJson:any
 
  page: number=1
  totalRecords: any
  ovalue : any=[]
  Object = Object;
  ojson=Object
  
  default_template=[".monitoring-es",
      ".ml-state",
  ".ml-notifications-000001",
  ".kibana_task_manager",
    ".kibana",
    ".management-beats",
    ".ml-anomalies",
    ".monitoring-kibana",
    ".monitoring-alerts-7",".monitoring-beats",
    ".monitoring-logstash",
    ".ml-stats",
    ".monitoring-logstash*",".transform-notifications-000002","kibana_index_template:.kibana",".ml-anomalies-"]
  

 constructor(private elk:ElkService ,private route:Router){}
 

 ngOnInit(): void {
   this.getDataElk()
 }
 //To get all index template data
 getDataElk():any{
  this.elk.getDataElk().subscribe(data=>
    {
      this.templates=data 
      // for(var val of this.default_template)
      // {
      //   console.log(val)
      // }
      this.default_template.forEach(e=>delete this.templates[e])
      console.warn(this.templates)
      this.stringifiedData = JSON.stringify(data)
      this.parsedJson = JSON.parse(this.stringifiedData) 
      //this.index_patterns=this.parsedJson[this.templetename]["index_patterns"]

      this.totalRecords=this.templates.length
    })
  }

 isSet(p:any):any
 {
   if(p)
    return true
  return false
 }

 templateName:any
 Confirmation: String = "User Deleted Successfully.";
 isDel: Boolean = false;

 deteleTemplate(p:any)
 {
   if(confirm("Are you want to delete template :"+p))
   {
   this.elk.deleteTemplate(p).subscribe(res => {
    console.log(res);  
    this.isDel=true;   
    
})
 }}

 closeAlert()
 {
  this.isDel=false
 }
  
 editTemplate(p:any)
 {
  if(confirm("Are you want to edit template :"+p))
  {
  this.route.navigate(['/edit',p])
  }

 }


}

