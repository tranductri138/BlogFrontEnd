import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuyencssComponent } from './luyencss.component';

describe('LuyencssComponent', () => {
  let component: LuyencssComponent;
  let fixture: ComponentFixture<LuyencssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuyencssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuyencssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
