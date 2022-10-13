export type InputTypes = {
  value: string;
  style: string;
  pleaceholder?: string;
  onInputChange: (e: any) => void;
  onEnterPress?: (event: any) => void;
};

export type ListTypes = {
  list: {
    id: number;
    text: string;
    done: boolean;
    editMode: boolean;
  }[];
};

export type UlTypes = {
  uniqueId: number;
  taskDone: (id: number) => void;
  editTask: (e: any, id: number, done: boolean, editMode: boolean) => void;
  deleteTask: (id: number) => void;
  id: number;
  text: string;
  done: boolean;
  editMode: boolean;
};

export type ButtonTypes = {
  name?: string;
  styleButton?: string;
  editMode?: boolean;
  onButtonClick?: () => void;
};

export type LinkTypes = {
  link: string;
  linkTitle: string;
};
