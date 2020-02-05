import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lab7Part2Page } from './lab7-part2.page';

describe('Lab7Part2Page', () => {
  let component: Lab7Part2Page;
  let fixture: ComponentFixture<Lab7Part2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab7Part2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lab7Part2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
