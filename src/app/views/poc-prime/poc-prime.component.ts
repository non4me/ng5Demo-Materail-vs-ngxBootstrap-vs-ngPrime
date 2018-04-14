import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dbs-poc-prime',
  templateUrl: './poc-prime.component.html',
  styleUrls: ['./poc-prime.component.scss']
})
export class PocPrimeComponent implements OnInit {

  name = 'data from controller';
  modalResult = '';
  searchObject: any;
  display = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.display = true;
  }

  formUpdated(form): void {
    this.searchObject = JSON.stringify(form, null, '    ');
  }
}
