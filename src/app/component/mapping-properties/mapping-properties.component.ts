import { JsonPipe, KeyValuePipe } from '@angular/common';
import { Component, OnInit ,Output,Input,EventEmitter} from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'  
 import{KeyValue} from '@angular/common'
 import {Property} from '../../model/template-model'
@Component({
  selector: 'app-mapping-properties',
  templateUrl: './mapping-properties.component.html',
  styleUrls: ['./mapping-properties.component.css']
})
export class MappingPropertiesComponent implements OnInit {
  @Output() addProperties=new EventEmitter<any>()
  //for edit 
  @Input() templateName:any
  @Input() mapProperty:Property={}

  stringifiedData :any
  parsedJson:any
  IsmodelShow:boolean=false
  attributeForm: FormGroup;  
  //tn:string=""
     
  constructor(private fb:FormBuilder) {  
     
    this.attributeForm = this.fb.group({  
      
      attribute: this.fb.array([]) ,  
    });  
  }  

  ngOnInit(): void {
    //console.log("you are in mapping properties")
     //console.log("working",this.templateName)
     //console.log("propery working",this.mapProperty)
     //this.tn=this.templateName
     this.getQuantity()
   }
    
  attribute() : FormArray {  
    return this.attributeForm.get("attribute") as FormArray  
  }  
     
  newQuantity(): FormGroup {  
    return this.fb.group({  
      name:'',
      type: '' ,
      format: '',  
    })  
  }  
     
  addQuantity() {  
    this.attribute().push(this.newQuantity());  
  }  
     
  removeQuantity(i:number) {  
    this.attribute().removeAt(i);  
  }  
     
  onSubmit() {  
    console.log(this.attributeForm.value); 
    this.addProperties.emit(this.attributeForm.value) 
  }  

  
  close()
  {
    this.IsmodelShow=true
  }
   getQuantity()
  {
    console.log("maps",this.mapProperty)
   //this.stringifiedData = JSON.stringify(this.mapProperty)
   //this.parsedJson = JSON.parse(this.stringifiedData) 
  // console.log("parsedjson",this.parsedJson)
   for(let type1 in this.mapProperty){
   console.log(type1)
   console.log(this.mapProperty[type1]["type"])
   console.log(this.mapProperty[type1]["format"])
   
    //console.log(this.parsedJson[type1])
    }
  //   for ( prop in property)
  //   {
  //     this.attribute().push(this.fb.group({  
  //       aname:prop.name,
  //       type: 'prop.type' ,
  //       format: 'prop.format',  
  //     })  )
  //   }
   // console.log(property)
  }

}
