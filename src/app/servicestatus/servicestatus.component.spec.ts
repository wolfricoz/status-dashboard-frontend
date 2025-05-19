import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicestatusComponent } from './servicestatus.component';

describe('ServicestatusComponent', () => {
  let component: ServicestatusComponent;
  let fixture: ComponentFixture<ServicestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicestatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
