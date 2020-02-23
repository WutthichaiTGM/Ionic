import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaremaPage } from './carema.page';

describe('CaremaPage', () => {
  let component: CaremaPage;
  let fixture: ComponentFixture<CaremaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaremaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaremaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
