import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BMIPage } from './bmi.page';

describe('BMIPage', () => {
  let component: BMIPage;
  let fixture: ComponentFixture<BMIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BMIPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BMIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
