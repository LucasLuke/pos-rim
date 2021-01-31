import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControleHidricoPage } from './controle-hidrico.page';

describe('ControleHidricoPage', () => {
  let component: ControleHidricoPage;
  let fixture: ComponentFixture<ControleHidricoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleHidricoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControleHidricoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
