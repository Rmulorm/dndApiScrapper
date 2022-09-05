import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MagicItemsListComponent } from "./magic-items-list.component";

describe("MagicItemsListComponent", () => {
  let component: MagicItemsListComponent;
  let fixture: ComponentFixture<MagicItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MagicItemsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MagicItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
