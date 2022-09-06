import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MagicItemDetailComponent } from "./magic-item-detail.component";

describe("MagicItemDetailComponent", () => {
  let component: MagicItemDetailComponent;
  let fixture: ComponentFixture<MagicItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MagicItemDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MagicItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
