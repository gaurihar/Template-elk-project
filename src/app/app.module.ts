import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';
import { ElkComponent } from './component/elk/elk.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { SidebarComponent } from './component/sidebar/sidebar.component'
import {MatTableModule} from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'
import { FormArrayName, FormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
//menu



import {MatIconModule} from '@angular/material/icon';
import { CreateTemplateComponent } from './component/create-template/create-template.component';
import { MappingDialerComponent } from './component/mapping-dialer/mapping-dialer.component';
import { EditComponent } from './component/edit/edit.component';
import { TemplateMenuComponent } from './component/template-menu/template-menu.component';
import { EditTemplateComponent } from './component/edit-template/edit-template.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ElkComponent,
    SidebarComponent,
    CreateTemplateComponent,
    MappingDialerComponent,
    EditComponent,
    TemplateMenuComponent,
    EditTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    NgxPaginationModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule,
  ],
  providers: [
    MatToolbarModule, 
   MatButtonModule,  
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
