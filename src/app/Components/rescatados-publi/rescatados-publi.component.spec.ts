import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescatadosPubliComponent } from './rescatados-publi.component';

describe('RescatadosPubliComponent', () => {
  let component: RescatadosPubliComponent;
  let fixture: ComponentFixture<RescatadosPubliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RescatadosPubliComponent]
    });
    fixture = TestBed.createComponent(RescatadosPubliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
