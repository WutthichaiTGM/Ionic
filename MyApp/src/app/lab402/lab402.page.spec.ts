import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lab402Page } from './lab402.page';

describe('Lab402Page', () => {
  let component: Lab402Page;
  let fixture: ComponentFixture<Lab402Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab402Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lab402Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
