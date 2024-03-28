import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionHeuresComponent } from './gestion-heures.component';

describe('GestionHeuresComponent', () => {
  let component: GestionHeuresComponent;
  let fixture: ComponentFixture<GestionHeuresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionHeuresComponent]
    });
    fixture = TestBed.createComponent(GestionHeuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
