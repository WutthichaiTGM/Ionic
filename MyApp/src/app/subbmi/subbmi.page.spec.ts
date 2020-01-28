import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SUBBMIPage } from './subbmi.page';

describe('SUBBMIPage', () => {
  let component: SUBBMIPage;
  let fixture: ComponentFixture<SUBBMIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SUBBMIPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SUBBMIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
