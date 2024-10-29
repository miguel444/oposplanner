import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasGraficaComponent } from './temas-grafica.component';

describe('TemasGraficaComponent', () => {
  let component: TemasGraficaComponent;
  let fixture: ComponentFixture<TemasGraficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemasGraficaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemasGraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
