import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BalancoHidricoPage } from './balanco-hidrico.page';

describe('BalancoHidricoPage', () => {
  let component: BalancoHidricoPage;
  let fixture: ComponentFixture<BalancoHidricoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalancoHidricoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BalancoHidricoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
