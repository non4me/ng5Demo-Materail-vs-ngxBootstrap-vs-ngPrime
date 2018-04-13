import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'dbs-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {

  @Output() modalClose: EventEmitter<any> = new EventEmitter();

  name: any;
  state: any;
  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.bsModalRef.hide();
  }

  onOKClick(): void {
    this.modalClose.emit(this.state);
    this.bsModalRef.hide();
  }

}
