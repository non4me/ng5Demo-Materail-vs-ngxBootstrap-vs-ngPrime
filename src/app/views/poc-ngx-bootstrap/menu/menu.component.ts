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
      icon: 'fas fa-info',
      label: 'Základní informace',
      url: ''
    },
    {
      order: 2,
      icon: 'fas fa-credit-card',
      label: 'Karty',
      url: ''
    },
    {
      order: 3,
      icon: 'fas fa-history',
      label: 'Transakční historie',
      url: '',
      active: true
    },
    {
      order: 4,
      icon: 'fas fa-sync',
      label: 'Trvalé platby a inkasa',
      url: ''
    },
    {
      order: 5,
      icon: 'fas fa-cubes',
      label: 'Služby a benefity',
      url: ''
    },
    {
      order: 6,
      icon: 'far fa-money-bill-alt',
      label: 'Kontokorent',
      url: ''
    },
    {
      order: 7,
      icon: 'far fa-money-bill-alt',
      label: 'Peníze na klik',
      url: ''
    },
    {
      order: 8,
      icon: 'fas fa-exclamation',
      label: 'Zákazy, vinkulace',
      url: ''
    },
    {
      order: 9,
      icon: 'far fa-file-alt',
      label: 'Dokumentace',
      url: ''
    },
    {
      order: 10,
      icon: 'fas fa-list',
      label: 'Žádosti k produktu',
      url: ''
    }
  ];

  ngOnInit(): void {
  }

}
