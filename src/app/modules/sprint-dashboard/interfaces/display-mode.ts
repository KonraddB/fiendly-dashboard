export enum EDisplayMode {
  EDIT = 'edit',
  PREVIEW = 'preview',
  ADD = 'add',
  ACHIEVE = 'achieve',
}

export interface DisplayMode {
  edit: boolean;
  preview: boolean;
  add: boolean;
  achieve: boolean;
}
