import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dbhomep1Page } from './dbhomep1.page';

describe('Dbhomep1Page', () => {
  let component: Dbhomep1Page;
  let fixture: ComponentFixture<Dbhomep1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dbhomep1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dbhomep1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
