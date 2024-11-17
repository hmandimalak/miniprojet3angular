import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParFaculteComponent } from './recherche-par-faculte.component';

describe('RechercheParFaculteComponent', () => {
  let component: RechercheParFaculteComponent;
  let fixture: ComponentFixture<RechercheParFaculteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheParFaculteComponent]
    });
    fixture = TestBed.createComponent(RechercheParFaculteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
