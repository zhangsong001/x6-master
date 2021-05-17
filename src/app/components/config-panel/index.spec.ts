import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPanelComponent } from '.';

describe('ConfigPanelComponent', () => {
  let component: ConfigPanelComponent;
  let fixture: ComponentFixture<ConfigPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
