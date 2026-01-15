import { BtnTransactionCanceled } from './btn-transaction.canceled';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('TransactionCanceled', () => {
  let component: BtnTransactionCanceled;
  let fixture: ComponentFixture<BtnTransactionCanceled>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnTransactionCanceled]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnTransactionCanceled);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
