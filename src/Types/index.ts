export interface DateTodoProps {
  date: Date;
}

export interface TodoProps extends DateTodoProps {
  title: string;
}

export interface ItemsTodos {
  items: TodoProps[];
}
