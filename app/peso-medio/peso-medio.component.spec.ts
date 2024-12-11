import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesoMedioComponent } from './peso-medio.component';

describe('PesoMedioComponent', () => {
  let component: PesoMedioComponent;
  let fixture: ComponentFixture<PesoMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesoMedioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesoMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
