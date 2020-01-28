import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Listviewp2Page } from './listviewp2.page';

describe('Listviewp2Page', () => {
  let component: Listviewp2Page;
  let fixture: ComponentFixture<Listviewp2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listviewp2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Listviewp2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
