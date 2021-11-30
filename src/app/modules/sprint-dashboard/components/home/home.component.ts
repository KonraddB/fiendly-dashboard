import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DisplayMode, EDisplayMode } from '../../interfaces/display-mode';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public projectInitData = [
    {
      number: 1,
      projectName: 'Densi',
      sprintStartDate: '12-12-2021',
      sprintEndDate: '12-09-2021',
      otherDays: 5,
      releaseOnProd: false,
      isAchieve: true,
    },
    {
      number: 2,
      projectName: 'Lande',
      sprintStartDate: '12-12-2021',
      sprintEndDate: '12-09-2021',
      otherDays: 5,
      releaseOnProd: false,
      isAchieve: false,
    },
    {
      number: 3,
      projectName: 'Tenzo',
      sprintStartDate: '12-12-2021',
      sprintEndDate: '12-09-2021',
      otherDays: 5,
      releaseOnProd: true,
      isAchieve: false,
    },
  ];

  public projectForm = new FormGroup({
    sprintArr: new FormArray([]),
  });
  public displayMode: DisplayMode = {
    preview: true,
    edit: false,
    add: false,
    achieve: false,
  };
  public EDisplayMode = EDisplayMode;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.projectInitData.map((sprint) => {
      this.pushProject(sprint);
    });
  }

  pushProject(sprint?: Project): void {
    const sprintArr = this.projectForm.controls.sprintArr as FormArray;
    sprintArr.insert(
      0,
      this.formBuilder.group({
        number: new FormControl(sprint ? sprint.number : ''),
        projectName: new FormControl(sprint ? sprint.projectName : ''),
        sprintStartDate: new FormControl(sprint ? sprint.sprintStartDate : ''),
        sprintEndDate: new FormControl(sprint ? sprint.sprintEndDate : ''),
        otherDays: new FormControl(sprint ? sprint.otherDays : ''),
        releaseOnProd: new FormControl(sprint ? sprint.releaseOnProd : false),
        isAchieve: new FormControl(sprint ? sprint.isAchieve : false),
      })
    );
  }

  addProject(): void {
    this.pushProject();
    this.changeFormMode('add');
  }

  get sprints(): FormArray {
    return this.projectForm.get('sprintArr') as FormArray;
  }

  changeFormMode(mode: string): any {
    Object.keys(this.displayMode).forEach(
      (k) => ((this.displayMode as any)[k] = false)
    );
    if (mode === this.EDisplayMode.EDIT) {
      this.displayMode.edit = true;
    } else if (mode === this.EDisplayMode.PREVIEW) {
      this.displayMode.preview = true;
    } else if (mode === this.EDisplayMode.ADD) {
      this.displayMode.add = true;
    } else if (mode === this.EDisplayMode.ACHIEVE) {
      this.displayMode.achieve = true;
    }
  }
}
