export interface ITask {
  id: number;
  text: string;
  done: boolean;
  editMode: boolean;
}

export type InputTypes = {
  value: string;
  onInputChange: (e: any) => void;
  onEnterPress: (event: any) => void;
};

export type ListTypes = {
  list: {
    id: number;
    text: string;
    done: boolean;
    editMode: boolean;
  }[];
};

export type ButtonTypes = {
  name: string;
  style?: string;
  onButtonClick: () => void;
};
