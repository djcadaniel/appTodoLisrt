import { useModalStore, useTodoStore } from "../store"
import { Todo } from "../types"
import { TodoDetailsItem } from "./TodoDetailsItem"

interface TodoDetailsProps {
  todo: Todo
}

export const TodoDetails = ({todo}: TodoDetailsProps) => {
  
  const setModal = useModalStore(state => state.setModal)

  const deleteTodo = useTodoStore(state => state.deleteTodo)
  const getTodoById = useTodoStore(state => state.getTodoById)

  const handleEdit = (todo: Todo) => {
    getTodoById(todo.id)
    setModal()
  }

  return (
    <div className="bg-white rounded-xl p-5 flex justify-between items-center">
      <div>
        <TodoDetailsItem label='Nombre' data={todo.name} />
        <TodoDetailsItem label='Prioridad' data={todo.priority} />
      </div>
      <div className="flex gap-5 text-white">
        <button 
          className="p-1 bg-indigo-600 hover:bg-indigo-700 rounded-lg"
          // onClick={()=>getTodoById(todo.id)}
          onClick={()=>handleEdit(todo)}
        >
          Editar
        </button>
        <button 
          className="p-1 bg-red-600 hover:bg-red-700 rounded-lg"
          onClick={()=>deleteTodo(todo.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}