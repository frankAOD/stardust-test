import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSelectionsComponent } from './current-selections.component';

describe('CurrentSelectionsComponent', () => {
  let component: CurrentSelectionsComponent;
  let fixture: ComponentFixture<CurrentSelectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentSelectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentSelectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
