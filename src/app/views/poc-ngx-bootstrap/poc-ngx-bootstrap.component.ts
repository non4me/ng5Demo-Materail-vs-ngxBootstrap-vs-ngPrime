import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalService, ModalOptions } from 'ngx-bootstrap';
import { CustomModalComponent } from '@app/views/poc-ngx-bootstrap/custom-modal/custom-modal.component';

@Component({
  selector: 'dbs-poc-prime',
  templateUrl: './poc-ngx-bootstrap.component.html',
  styleUrls: ['./poc-ngx-bootstrap.component.scss']
})
export class PocNgxBootstrapComponent implements OnInit {

  modalInitState = { title: 'custom dialog', name: 'data from controller', data: '', event: new EventEmitter() };
  modalResult = '';
  searchObject: any;

  constructor(private modalService: BsModalService) {
    this.modalInitState.event.subscribe(() => {
    });
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.modalService.show(CustomModalComponent, { initialState: this.modalInitState });
  }

  formUpdated(form): void {
    this.searchObject = JSON.stringify(form, null, '    ');
  }
}
