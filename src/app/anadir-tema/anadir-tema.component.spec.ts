import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirTemaComponent } from './anadir-tema.component';

describe('AnadirTemaComponent', () => {
  let component: AnadirTemaComponent;
  let fixture: ComponentFixture<AnadirTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnadirTemaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnadirTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
