//Code à copier, ne pas l'utiliser en tant que composant 

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-transaction.canceled',
  imports: [],
  templateUrl: './btn-transaction.canceled.html',
  styleUrl: './btntransaction.canceled.css',
})
export class BtnTransactionCanceled {

  @Input() canCancel = false;

  @Output() cancel = new EventEmitter<void>();

  canceled = false;

  onCancel() {
    this.canceled = true;
    this.cancel.emit();
  }
}
