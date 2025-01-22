import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerBioComponent } from './speaker-bio.component';

describe('SpeakerBioComponent', () => {
  let component: SpeakerBioComponent;
  let fixture: ComponentFixture<SpeakerBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeakerBioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakerBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
