import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesoPesadoComponent } from './peso-pesado.component';

describe('PesoPesadoComponent', () => {
  let component: PesoPesadoComponent;
  let fixture: ComponentFixture<PesoPesadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesoPesadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesoPesadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
