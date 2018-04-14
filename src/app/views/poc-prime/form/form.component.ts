import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    { code: 'all', name: 'Všechny' },
    { code: 'one', name: 'Jedna' }
  ];

  bankCodes = [
    { code: '2010', name: '2010 | FIO' },
    { code: '1000', name: '1000 | I am a long name of some bank' }
  ];
  filteredBankCodes: any[];

  locale = {
    firstDayOfWeek: 1,
    dayNames: ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'],
    dayNamesShort: ['Ned', 'Pon', 'Út', 'Stř', 'Čtv', 'Pát', 'Sob'],
    dayNamesMin: ['N', 'P', 'Ú', 'S', 'Č', 'P', 'S'],
    monthNames: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
    monthNamesShort: ['Led', 'Úno', 'Bře', 'Dub', 'Kvě', 'Čer', 'Čer', 'Srp', 'Zář', 'Říj', 'Lis', 'Pro'],
    today: 'Dnes',
    clear: 'Vymazat'
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      transactions: this.transactions[0].code,
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

    // tslint:disable-next-line:no-console
    this.searchForm.valueChanges.subscribe(form => console.log(form));
  }

  filterBankCodes(event): void {
    this.filteredBankCodes = [];
    for (const brand of this.bankCodes) {
      if (brand.name.toLowerCase().indexOf(event.query.toLowerCase()) > -1) {
        this.filteredBankCodes.push(brand);
      }
    }
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
