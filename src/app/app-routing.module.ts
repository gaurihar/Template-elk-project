import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {ElkComponent}  from './component/elk/elk.component'
import {CreateTemplateComponent} from './component/create-template/create-template.component'
import {EditComponent} from './component/edit/edit.component'
import {TemplateMenuComponent} from  './component/template-menu/template-menu.component'
const routes: Routes = [
{path: 'template', component: ElkComponent},
{path:'create',component:CreateTemplateComponent},
{path:'edit/:templatename',component:EditComponent},
{path:'template-menu',component:TemplateMenuComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
