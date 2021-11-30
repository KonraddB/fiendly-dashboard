import { Component, Input } from '@angular/core';
import { FormArray } from '@angular/forms';
import { DisplayMode } from '../../interfaces/display-mode';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent {
  @Input() projectForm: any;
  @Input() displayMode!: DisplayMode;

  constructor() {}

  get sprints(): FormArray {
    return this.projectForm.get('sprintArr') as FormArray;
  }
}
