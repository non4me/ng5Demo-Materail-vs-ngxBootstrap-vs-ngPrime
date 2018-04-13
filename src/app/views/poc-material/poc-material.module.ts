import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

import { PocMaterialComponent } from './poc-material.component';
import { CustomModalComponent } from './custom-modal/custom-modal.component';

import { CoreModule } from '@core/core.module';
import { MenuComponent } from './menu/menu.component';
import { FormComponent } from './form/form.component';

const routs: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PocMaterialComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routs),
    MatAutocompleteModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatRadioModule
  ],
  declarations: [PocMaterialComponent, CustomModalComponent, MenuComponent, FormComponent],
  entryComponents: [CustomModalComponent]
})
export class PocMaterialModule {
}
