import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SvColetaPage } from './sv-coleta.page';

describe('SvColetaPage', () => {
  let component: SvColetaPage;
  let fixture: ComponentFixture<SvColetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvColetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SvColetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
