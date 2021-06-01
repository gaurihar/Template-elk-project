import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { TName} from '../model/template-model'

@Injectable({
  providedIn: 'root'
})
export class ElkService {
  
  constructor(private http:HttpClient) { }
  
 public  getDataElk():Observable<any>
  {
   
   return this.http.get<any>('/_template');

  }
  public getTemplateData(name:string):Observable<any>
  {
    return this.http.get(`_template/${name}`);

  }

  public createTemplate(templatemodel:TName,name:string):Observable<any>
  {
    return this.http.post(`_template/${name}`, templatemodel);

  }

   deleteTemplate(template_name: any) {
     
    return this.http.delete(`/_template/${template_name}`);
  }
}
