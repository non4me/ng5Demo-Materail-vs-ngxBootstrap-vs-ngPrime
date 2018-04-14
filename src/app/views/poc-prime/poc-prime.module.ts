import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PocPrimeComponent } from './poc-prime.component';
import { FormComponent } from './form/form.component';
import { MenuComponent } from './menu/menu.component';
import { CustomModalComponent } from './custom-modal/custom-modal.component';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { SpinnerModule } from 'primeng/spinner';
import { AutoCompleteModule } from 'primeng/autocomplete';

const routs: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PocPrimeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routs),
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ButtonModule,
    DialogModule,
    RadioButtonModule,
    CalendarModule,
    DropdownModule,
    SpinnerModule,
    AutoCompleteModule
  ],
  declarations: [PocPrimeComponent, FormComponent, MenuComponent, CustomModalComponent]
})
export class PocPrimeModule {
}
