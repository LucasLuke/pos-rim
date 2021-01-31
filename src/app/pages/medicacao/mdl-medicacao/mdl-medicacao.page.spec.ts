import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MdlMedicacaoPage } from './mdl-medicacao.page';

describe('MdlMedicacaoPage', () => {
  let component: MdlMedicacaoPage;
  let fixture: ComponentFixture<MdlMedicacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdlMedicacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MdlMedicacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
