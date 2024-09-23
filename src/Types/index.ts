export interface DateTodoProps {
  date: Date;
}

export interface TodoProps extends DateTodoProps {
  title: string;
  id?: string;
}

export interface ItemsTodos {
  items: TodoProps[];
}
