import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { P1loginPage } from './p1login.page';

describe('P1loginPage', () => {
  let component: P1loginPage;
  let fixture: ComponentFixture<P1loginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P1loginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(P1loginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
