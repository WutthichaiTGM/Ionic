import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckBoxPage } from './check-box.page';

describe('CheckBoxPage', () => {
  let component: CheckBoxPage;
  let fixture: ComponentFixture<CheckBoxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBoxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckBoxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
