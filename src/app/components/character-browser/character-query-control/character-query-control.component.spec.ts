import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterQueryControlComponent } from './character-query-control.component';

describe('CharacterQueryControlComponent', () => {
  let component: CharacterQueryControlComponent;
  let fixture: ComponentFixture<CharacterQueryControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterQueryControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterQueryControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
