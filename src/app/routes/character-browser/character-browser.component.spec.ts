import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBrowserComponent } from './character-browser.component';
import { CharacterQueryControlComponent } from '../../components/character-browser/character-query-control/character-query-control.component';

describe('CharacterBrowserComponent', () => {
  let component: CharacterBrowserComponent;
  let fixture: ComponentFixture<CharacterBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CharacterBrowserComponent
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
