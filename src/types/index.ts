export type Todo = {
  id: string,
  name: string,
  priority: string
}

export type DraftTodo = Omit<Todo, 'id'>