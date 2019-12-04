import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {NavComponent} from './nav/nav.component'
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http'
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,RouterTestingModule,HttpClientModule
      ],
      declarations: [
        AppComponent,NavComponent 
      ],
    }).compileComponents();
  }));

  it('Se crea el componente', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
