import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lab4002Page } from './lab4002.page';

describe('Lab4002Page', () => {
  let component: Lab4002Page;
  let fixture: ComponentFixture<Lab4002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab4002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lab4002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
