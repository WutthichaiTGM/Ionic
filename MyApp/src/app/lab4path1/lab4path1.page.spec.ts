import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lab4path1Page } from './lab4path1.page';

describe('Lab4path1Page', () => {
  let component: Lab4path1Page;
  let fixture: ComponentFixture<Lab4path1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab4path1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lab4path1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
