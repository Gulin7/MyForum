import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeTopicsComponent } from './see-topics.component';

describe('SeeTopicsComponent', () => {
  let component: SeeTopicsComponent;
  let fixture: ComponentFixture<SeeTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeTopicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeeTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
