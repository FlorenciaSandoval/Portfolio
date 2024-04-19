import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesignsComponent } from './graphic-designs.component';

describe('GraphicDesignsComponent', () => {
  let component: GraphicDesignsComponent;
  let fixture: ComponentFixture<GraphicDesignsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphicDesignsComponent]
    });
    fixture = TestBed.createComponent(GraphicDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
