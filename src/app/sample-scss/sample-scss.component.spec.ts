import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleScssComponent } from './sample-scss.component';

describe('SampleScssComponent', () => {
  let component: SampleScssComponent;
  let fixture: ComponentFixture<SampleScssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleScssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
