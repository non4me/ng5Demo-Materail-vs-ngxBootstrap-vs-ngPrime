import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'dbs-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() formUpdated: EventEmitter<any> = new EventEmitter();

  searchForm: FormGroup;
  submitted = false;
  transactions = [
    { value: 'all', viewValue: 'Všechny' },
    { value: 'one', viewValue: 'Jedna' }
  ];

  bankCodes = [
    { code: '2010', name: '2010 | FIO' },
    { code: '1000', name: '1000 | I am a long name of some bank' }
  ];
  filteredBankCodes: Observable<any[]>;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      transactions: this.transactions[0].value,
      period: this.fb.group({
        type: '',
        lastDays: 30,
        month: '',
        timePeriod: this.fb.group({
          from: null,
          to: null
        })
      }),
      account: this.fb.group({
        number: '',
        bankCode: ''
      }),
      amount: this.fb.group({
        from: '',
        to: ''
      }),
      vs: ''
    });

    this.filteredBankCodes = this.searchForm.get('account.bankCode').valueChanges
      .pipe(
        startWith(''),
        map(state => this.filterStates(state))
      );
  }

  filterStates(name: string): any[] {
    return this.bankCodes.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
  }

  displayWith(value): string {
    return value;
  }

  submitForm(): void {
    this.submitted = true;

    if (this.searchForm.status === 'INVALID') {
      // TODO
    }
    else {
      this.formUpdated.emit(this.searchForm.value);
    }
  }
}
