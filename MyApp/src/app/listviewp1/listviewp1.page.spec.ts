import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Listviewp1Page } from './listviewp1.page';

describe('Listviewp1Page', () => {
  let component: Listviewp1Page;
  let fixture: ComponentFixture<Listviewp1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listviewp1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Listviewp1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
