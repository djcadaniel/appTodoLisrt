import { MdDelete } from "react-icons/md"
import { FaCheckSquare, FaEdit } from "react-icons/fa"
import { useModalStore, useTodoStore } from "../store"
import { Todo } from "../types"

type TodoDetailsItem = {
  todo: Todo
}


export const TodoDetailsItem = ({todo}: TodoDetailsItem) => {

  const setModal = useModalStore(state => state.setModal)

  const deleteTodo = useTodoStore(state => state.deleteTodo)
  const getTodoById = useTodoStore(state => state.getTodoById)
  const completeTodo = useTodoStore(state => state.completeTodo)

  const handleComplete = (todo: Todo) => {
    completeTodo(todo.id)
  }
  const handleEdit = (todo: Todo) => {
    getTodoById(todo.id)
    setModal()
  }

  return (
    <>
      <div className=" p-5">
        <span className="normal-case break-words text-slate-700 font-bold text-lg">{todo.name}</span><br />
      </div>
      <div className="w-full flex justify-between text-green-950 px-5">
        <div className="w-[70%]">
          <p className="normal-case break-words bg-[#31e3b4] inline-block px-3 py-1 rounded-xl text-sm">
            {todo.priority}
          </p>
        </div>
        <div className="flex w-[30%] justify-end items-center">
          <button 
            className="p-1 rounded-lg text-green-500 text-2xl"
            // onClick={()=>getTodoById(todo.id)}
            onClick={()=>handleComplete(todo)}
          >
            <FaCheckSquare />
          </button>
          <button 
            className="p-1 rounded-lg text-blue-300 text-2xl"
            // onClick={()=>getTodoById(todo.id)}
            onClick={()=>handleEdit(todo)}
          >
            <FaEdit />
          </button>
          <button 
            className="p-1 rounded-lg text-red-500 text-2xl"
            onClick={()=>deleteTodo(todo.id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  )
}