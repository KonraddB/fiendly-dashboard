import { Component, Input } from '@angular/core';
import { FormArray } from '@angular/forms';
import { DisplayMode } from '../../interfaces/display-mode';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent {
  @Input() projectForm: any;
  @Input() displayMode!: DisplayMode;

  constructor() {}

  archiveProject(sprint: FormArray): void {
    sprint?.get('isAchieve')?.setValue(true);
  }
}
