import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingPropertiesComponent } from './mapping-properties.component';

describe('MappingPropertiesComponent', () => {
  let component: MappingPropertiesComponent;
  let fixture: ComponentFixture<MappingPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappingPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
