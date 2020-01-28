import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lab4path2Page } from './lab4path2.page';

describe('Lab4path2Page', () => {
  let component: Lab4path2Page;
  let fixture: ComponentFixture<Lab4path2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab4path2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lab4path2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
