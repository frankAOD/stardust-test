import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlikFilterComponent } from './qlik-filter.component';

describe('QlikFilterComponent', () => {
  let component: QlikFilterComponent;
  let fixture: ComponentFixture<QlikFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QlikFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QlikFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
