import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquetteComponent } from './maquette.component';

describe('MaquetteComponent', () => {
  let component: MaquetteComponent;
  let fixture: ComponentFixture<MaquetteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaquetteComponent]
    });
    fixture = TestBed.createComponent(MaquetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
