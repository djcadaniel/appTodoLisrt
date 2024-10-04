import { FaCheckSquare, FaEdit } from "react-icons/fa"
import { useModalStore, useTodoStore } from "../store"
import { TodoDetailsItem } from "./TodoDetailsItem"
import { MdDelete } from "react-icons/md"
import { Todo } from "../types"

interface TodoDetailsProps {
  todo: Todo
}

export const TodoDetails = ({todo}: TodoDetailsProps) => {
  
  const setModal = useModalStore(state => state.setModal)

  const deleteTodo = useTodoStore(state => state.deleteTodo)
  const getTodoById = useTodoStore(state => state.getTodoById)
  const completeTodo = useTodoStore(state => state.completeTodo)
  const todos = useTodoStore(state => state.todos)

  const handleComplete = (todo: Todo) => {
    completeTodo(todo.id)
    console.log(todos)
  }
  const handleEdit = (todo: Todo) => {
    getTodoById(todo.id)
    setModal()
  }

  return (
    <div className={`${todo.complete ? 'bg-green-500' : 'bg-slate-700'} rounded-xl p-5 flex flex-col items-start shadow-sm shadow-lg-left shadow-lg-right shadow-slate-400`}>
      <div className="text-white overflow-hidden  w-full py-5">
        <TodoDetailsItem name={todo.name} priority={todo.priority} />
      </div>
      <div className="w-full flex justify-between gap-5 text-white">
        <div>
          <TodoDetailsItem name={todo.name} priority={todo.priority} />
        </div>
        <div className="flex gap-3">
          <button 
            className="p-1 bg-green-600 hover:bg-green-700 rounded-lg"
            // onClick={()=>getTodoById(todo.id)}
            onClick={()=>handleComplete(todo)}
          >
            <FaCheckSquare />
          </button>
          <button 
            className="p-1 bg-indigo-600 hover:bg-indigo-700 rounded-lg"
            // onClick={()=>getTodoById(todo.id)}
            onClick={()=>handleEdit(todo)}
          >
            <FaEdit />
          </button>
          <button 
            className="p-1 bg-red-600 hover:bg-red-700 rounded-lg"
            onClick={()=>deleteTodo(todo.id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  )
}