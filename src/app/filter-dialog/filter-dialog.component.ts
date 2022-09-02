import { Component, Inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

export interface PossibleValue {
  name: string;
  value: string;
}

export interface Filter {
  property: string;
  possibleValues: PossibleValue[];
  selectedValue: string;
}

export interface FilterDialogInput {
  [key: string]: Filter;
}

export interface FilterDialogOutput {
  [key: string]: any;
  // schoolFilter: string;
  // spellLevelFilter: number;
}

@Component({
  selector: "app-filter-dialog",
  templateUrl: "./filter-dialog.component.html",
  styleUrls: ["./filter-dialog.component.scss"],
})
export class FilterDialogComponent {
  form: FormGroup<{
    school: FormControl<string | null>;
    spellLevel: FormControl<string | null>;
  }>;

  constructor(
    formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dialogInput: FilterDialogInput,
    private dialogRef: MatDialogRef<FilterDialogComponent>
  ) {
    this.form = formBuilder.group({
      school: [dialogInput.schoolFilter.selectedValue] as string[],
      spellLevel: [dialogInput.spellLevelFilter.selectedValue] as string[],
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    const result = {
      schoolFilter: this.form.value.school,
      spellLevelFilter: !!this.form.value.spellLevel
        ? parseInt(this.form.value.spellLevel)
        : null,
    } as FilterDialogOutput;
    this.dialogRef.close(result);
  }
}

export function openEditCourseDialog(
  dialog: MatDialog,
  dialogInput: FilterDialogInput
) {
  const config = new MatDialogConfig<FilterDialogInput>();

  config.disableClose = true;
  config.autoFocus = true;
  config.panelClass = "modal-panel";
  config.backdropClass = "backdrop-modal-panel";

  config.data = {
    ...dialogInput,
  };

  const dialogRef = dialog.open<
    FilterDialogComponent,
    FilterDialogInput,
    FilterDialogOutput
  >(FilterDialogComponent, config);

  return dialogRef.afterClosed();
}
