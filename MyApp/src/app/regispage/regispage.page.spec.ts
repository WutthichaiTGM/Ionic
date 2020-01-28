import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegispagePage } from './regispage.page';

describe('RegispagePage', () => {
  let component: RegispagePage;
  let fixture: ComponentFixture<RegispagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegispagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegispagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
