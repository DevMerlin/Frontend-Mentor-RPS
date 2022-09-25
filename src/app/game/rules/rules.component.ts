import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  import: any;
  state: number = 0;

  constructor(
    private dialogRef: MatDialogRef<RulesComponent>,
    @Inject(MAT_DIALOG_DATA) data:any
  ) {
    this.import = data;
    console.log(this.import);
   }

  ngOnInit(): void {
    this.state = this.import.state;
  }

  close(): void
  {
    this.dialogRef.close();
  }

}
