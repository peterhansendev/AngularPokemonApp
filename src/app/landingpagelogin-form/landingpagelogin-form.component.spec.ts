import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageloginFormComponent } from './landingpagelogin-form.component';

describe('LandingpageloginFormComponent', () => {
  let component: LandingpageloginFormComponent;
  let fixture: ComponentFixture<LandingpageloginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingpageloginFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingpageloginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
