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
      console.warn(this.templates)
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

