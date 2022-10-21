export type LinkTypes = {
  link: string;
  linkTitle: string;
};

export type PopupTypes = {
  trigger: boolean;
};

export type TaskHeaderTypes = {
  tasksCounter: number;
  inputMode: boolean;
  onClick: () => void;
};

export type FirstViewTypes = {
  activeMode: boolean;
};

export type CreateTaskTypes = {
  dispatch: ({}: {}) => void;
};

export type ProgressbarTypes = {
  tasks: []
}
