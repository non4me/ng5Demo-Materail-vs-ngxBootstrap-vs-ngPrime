import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CustomModalComponent } from './custom-modal/custom-modal.component';

@Component({
  selector: 'dbs-poc-material',
  templateUrl: './poc-material.component.html',
  styleUrls: ['./poc-material.component.scss']
})
export class PocMaterialComponent implements OnInit {

  name = 'data from controller';
  searchObject: any;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CustomModalComponent, {
      width: '250px',
      data: { name: this.name, animal: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.formUpdated(result);
    });
  }

  formUpdated(form): void {
    this.searchObject = JSON.stringify(form, null, '    ');
  }
}
