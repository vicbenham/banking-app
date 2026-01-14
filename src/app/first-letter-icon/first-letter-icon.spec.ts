import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLetterIcon } from './first-letter-icon';

describe('FirstLetterIcon', () => {
  let component: FirstLetterIcon;
  let fixture: ComponentFixture<FirstLetterIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstLetterIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstLetterIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
