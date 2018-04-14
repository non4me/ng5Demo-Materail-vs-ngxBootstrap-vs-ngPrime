import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  BsDatepickerModule,
  BsDropdownModule,
  ModalModule,
  TypeaheadModule
} from 'ngx-bootstrap';

import { PocNgxBootstrapComponent } from './poc-ngx-bootstrap.component';
import { FormComponent } from './form/form.component';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { MenuComponent } from './menu/menu.component';

const routs: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PocNgxBootstrapComponent
  }
];

@NgModule({
  entryComponents: [CustomModalComponent],
  imports: [
    FlexLayoutModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routs)
  ],
  declarations: [PocNgxBootstrapComponent, FormComponent, CustomModalComponent, MenuComponent]
})
export class PocNgxBootstrapModule {
}
