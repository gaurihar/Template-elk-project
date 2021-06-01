import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingDialerComponent } from './mapping-dialer.component';

describe('MappingDialerComponent', () => {
  let component: MappingDialerComponent;
  let fixture: ComponentFixture<MappingDialerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappingDialerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingDialerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
