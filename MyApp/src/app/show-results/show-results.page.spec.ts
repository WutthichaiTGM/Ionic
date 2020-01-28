import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowResultsPage } from './show-results.page';

describe('ShowResultsPage', () => {
  let component: ShowResultsPage;
  let fixture: ComponentFixture<ShowResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowResultsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
