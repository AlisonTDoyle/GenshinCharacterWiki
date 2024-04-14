import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsBrowserComponent } from './teams-browser.component';

describe('TeamsBrowserComponent', () => {
  let component: TeamsBrowserComponent;
  let fixture: ComponentFixture<TeamsBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsBrowserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamsBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
