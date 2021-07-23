import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'  

@Component({
  selector: 'app-mapping-property',
  templateUrl: './mapping-property.component.html',
  styleUrls: ['./mapping-property.component.css']
})
export class MappingPropertyComponent implements OnInit {


 
  attributeForm: FormGroup;  
     
  constructor(private fb:FormBuilder) {  
     
    this.attributeForm = this.fb.group({  
      
      attributes: this.fb.array([]) ,  
    });  
  }  
    
  ngOnInit(): void {
  }
  quantities() : FormArray {  
    return this.attributeForm.get("attributes") as FormArray  
  }  
     
  newQuantity(): FormGroup {  
    return this.fb.group({ 
      aname:['',Validators], 
      type: ['',Validators],  
      format: '',  
    })  
  }  
     
  addQuantity() {  
    this.quantities().push(this.newQuantity());  
  }  
     
  removeQuantity(i:number) {  
    this.quantities().removeAt(i);  
  }  
     
  onSubmit() {  
    console.log(this.attributeForm.value);  
  }  

}
