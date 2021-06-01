import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Attributes} from '../../model/template-model';


@Component({
  selector: 'app-mapping-dialer',
  templateUrl: './mapping-dialer.component.html',
  styleUrls: ['./mapping-dialer.component.css']
})
export class MappingDialerComponent {
  
  constructor(
    public dialogRef: MatDialogRef<MappingDialerComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Array<Attributes>) {
      this.data=[]
      this.data.push({
        name: '',
        type: '',
        format: ''  
      })
  }

  doAction(){
    this.dialogRef.close({data:this.data});
  }

  closeDialog(){
    this.dialogRef.close();
  }


  addMapping() {
    this.data.push({
      name: '',
      type: '',
      format: ''
    });
  }

  removeMapping(i: number) {
    this.data.splice(i, 1);
  }

  logMap() {
    console.log(this.data);
  }
}