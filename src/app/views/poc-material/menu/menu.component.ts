import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dbs-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu = [
    {
      order: 1,
      icon: 'assignment',
      text: 'Základní informace'
    },
    {
      order: 2,
      icon: 'credit_card',
      text: 'Karty'
    },
    {
      order: 3,
      icon: 'history',
      text: 'Transakční historie',
      active: true
    },
    {
      order: 4,
      icon: 'av_timer',
      text: 'Trvalé platby a inkasa'
    },
    {
      order: 5,
      icon: 'account_balance',
      text: 'Služby a benefity'
    },
    {
      order: 6,
      icon: 'local_atm',
      text: 'Kontokorent'
    },
    {
      order: 7,
      icon: 'near_me',
      text: 'Peníze na klik'
    },
    {
      order: 8,
      icon: 'new_releases',
      text: 'Zákazy, vinkulace'
    },
    {
      order: 9,
      icon: 'description',
      text: 'Dokumentace'
    },
    {
      order: 10,
      icon: 'comment',
      text: 'Žádosti k produktu'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
