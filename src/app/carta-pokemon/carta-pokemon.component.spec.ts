import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaPokemonComponent } from './carta-pokemon.component';

describe('CartaPokemonComponent', () => {
  let component: CartaPokemonComponent;
  let fixture: ComponentFixture<CartaPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
