import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingPropertyComponent } from './mapping-property.component';

describe('MappingPropertyComponent', () => {
  let component: MappingPropertyComponent;
  let fixture: ComponentFixture<MappingPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappingPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
