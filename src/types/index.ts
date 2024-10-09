export type Category = {
  id: number,
  name: string,
  
}

export type Todo = {
  id: string,
  name: string,
  priority: string,
  complete: boolean
}

export type DraftTodo = Omit<Todo, 'id' | 'complete'>
