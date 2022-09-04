import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Apollo, gql } from "apollo-angular";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Spell } from "src/app/types/dnd-api-types";
import { SpellsService } from "../spell.service";

@Component({
  selector: "app-spell-detail",
  templateUrl: "./spell-detail.component.html",
  styleUrls: ["./spell-detail.component.scss"],
})
export class SpellDetailComponent implements OnInit {
  spell$!: Observable<Spell>;
  loading = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SpellsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap;
    this.spell$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getSpell(params.get("id")!))
    );
  }
}
