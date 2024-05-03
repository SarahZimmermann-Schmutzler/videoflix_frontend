import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateAccountComponent } from './activate-account.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('ActivateAccountComponent', () => {
  let component: ActivateAccountComponent;
  let fixture: ComponentFixture<ActivateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, ActivatedRoute],
      declarations: [ ActivateAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
