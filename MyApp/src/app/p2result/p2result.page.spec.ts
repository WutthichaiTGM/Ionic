import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { P2resultPage } from './p2result.page';

describe('P2resultPage', () => {
  let component: P2resultPage;
  let fixture: ComponentFixture<P2resultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2resultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(P2resultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
