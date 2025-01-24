import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRescatadosComponent } from './form-rescatados.component';

describe('FormRescatadosComponent', () => {
  let component: FormRescatadosComponent;
  let fixture: ComponentFixture<FormRescatadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRescatadosComponent]
    });
    fixture = TestBed.createComponent(FormRescatadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
