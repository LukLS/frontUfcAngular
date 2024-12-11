import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesoMeioPesadoComponent } from './peso-meio-pesado.component';

describe('PesoMeioPesadoComponent', () => {
  let component: PesoMeioPesadoComponent;
  let fixture: ComponentFixture<PesoMeioPesadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesoMeioPesadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesoMeioPesadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
