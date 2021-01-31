import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicacaoPage } from './medicacao.page';

describe('MedicacaoPage', () => {
  let component: MedicacaoPage;
  let fixture: ComponentFixture<MedicacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
