import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'  
 
@Component({
  selector: 'app-mapping-properties',
  templateUrl: './mapping-properties.component.html',
  styleUrls: ['./mapping-properties.component.css']
})
export class MappingPropertiesComponent implements OnInit {
  @Output() addProperties=new EventEmitter<any>()
  IsmodelShow:boolean=false
  attributeForm: FormGroup;  
     
  constructor(private fb:FormBuilder) {  
     
    this.attributeForm = this.fb.group({  
      
      attribute: this.fb.array([]) ,  
    });  
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

  ngOnInit(): void {
  }
  close()
  {
    this.IsmodelShow=true
  }
  // getQuantity(property:Property,templatename)
  // {
  //   for ( prop in property)
  //   {
  //     this.attribute().push(this.fb.group({  
  //       aname:prop.name,
  //       type: 'prop.type' ,
  //       format: 'prop.format',  
  //     })  )
  //   }
   // console.log(property)
  //}

}
