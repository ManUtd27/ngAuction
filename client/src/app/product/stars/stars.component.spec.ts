import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsComponent } from './stars.component';

describe('StarsComponent', () => {
  let component: StarsComponent;
  let fixture: ComponentFixture<StarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('is successfully injected', () => {
    const component = TestBed.createComponent(StarsComponent).componentInstance;
    expect(component instanceof StarsComponent).toEqual(true);
  });

  it('readonly property is true by default', () => {
    let component = TestBed.createComponent(StarsComponent).componentInstance;
    expect(component.readonly).toEqual(true);
  });
});
