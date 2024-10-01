import { useEffect } from "react"
import { useTodoStore } from "../store"
import { TodoDetails } from "./TodoDetails"


export const TodoList = () => {

  const todos = useTodoStore(state=>state.todos)
  const activeId = useTodoStore(state=>state.activeId)

  useEffect(() => {
    if(activeId){
      const activeTodo = todos.filter(todo=> todo.id === activeId)[0]
      console.log(activeTodo)
    }
  }, [activeId])

  return (
    <div className="w-full bg-blue-600 h-[calc(100vh-110px)]">
      <h2>Listado de Actividades</h2>
      <div className="grid grid-cols-4 gap-5 bg-red-400">
        {
          todos.map(todo=>(
            <TodoDetails 
              key={todo.id}
              todo={todo}
            />
          ))
        }
      </div>
    </div>
  )
}