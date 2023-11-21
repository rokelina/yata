export type Todo = {
  id: string;
  dateCreated: number;
  isCompleted: boolean;
  isDeleted: boolean;
  content?: string;
  dateCompleted?: number;
};
