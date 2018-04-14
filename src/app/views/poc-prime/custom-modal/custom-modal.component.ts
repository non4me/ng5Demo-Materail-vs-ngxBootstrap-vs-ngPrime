import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dbs-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {
  @Output() modalClose: EventEmitter<any> = new EventEmitter();
  @Input() parent: any;
  @Input() name: string;

  @Input()
  set open(state) {
    if (state) {
      this.onOpen();
    }
    else if (state !== undefined) {
      this.onClose();
    }
  }

  data: any;

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.data = {
      name: this.name,
      animal: ''
    };
  }

  onOpen(): void {
    this.initData();
  }

  onClose(): void {
  }

  onCancel(): void {
    this.parent.display = false;
  }

  onOk(): void {
    this.parent.display = false;
    this.modalClose.emit(this.data);
  }
}
