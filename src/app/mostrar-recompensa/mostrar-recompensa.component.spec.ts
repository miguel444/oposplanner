import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarRecompensaComponent } from './mostrar-recompensa.component';

describe('MostrarRecompensaComponent', () => {
  let component: MostrarRecompensaComponent;
  let fixture: ComponentFixture<MostrarRecompensaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostrarRecompensaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarRecompensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
