import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinaisVitaisPage } from './sinais-vitais.page';

describe('SinaisVitaisPage', () => {
  let component: SinaisVitaisPage;
  let fixture: ComponentFixture<SinaisVitaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinaisVitaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinaisVitaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
