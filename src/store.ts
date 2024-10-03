import {create} from "zustand";
import { v4 as uuidv4 } from 'uuid';
import { DraftTodo, Todo } from "./types";
import { devtools } from "zustand/middleware";

type TodoStore = {
  todos: Todo[],
  activeId: Todo['id']
  completeId: Todo['id']
  addTodos: (data: DraftTodo) => void
  deleteTodo: (id: Todo['id']) => void
  getTodoById: (id: Todo['id']) => void
  updateTodo: (data: DraftTodo) => void
  resetTodo: ()=>void
  completeTodo: (id: Todo['id'])=> void
}

type modalStore = {
  modal: boolean,
  setModal: ()=>void
}

export const useModalStore = create<modalStore>()(devtools((set)=>({
  modal: false,
  setModal: ()=>{
    set((state)=>({
      modal: !state.modal
    }))
  }
})))

export const createTodo = (data: DraftTodo): Todo => {
  return {...data, id: uuidv4(), complete: false}
}

export const useTodoStore = create<TodoStore>()(devtools((set)=>({
  todos: [],
  activeId: '',
  completeId: '',
  addTodos: (data)=>{
    const newTodo = createTodo(data)
    set((state)=>({
      todos: [...state.todos, newTodo]
    }))
  },
  deleteTodo: (id)=>{
    set((state)=>({
      todos: state.todos.filter(todo=> todo.id !== id)
    }))
  },
  getTodoById: (id)=>{
    set(()=>({
      activeId: id
    }))
  },
  updateTodo:(data)=>{
    set((state)=>({
      todos: state.todos.map(todo => todo.id === state.activeId ? {id: state.activeId, complete:false, ...data}: todo),
      activeId: '',
    }))
  },
  resetTodo:()=>{
    set(()=>({
      todos: [],
    }
    ))
  },
  completeTodo:(id)=>{
    set((state)=>({
      todos: state.todos.map(todo=> todo.id === id ? {...todo, complete: !todo.complete}: todo )
    }))
  }
})))