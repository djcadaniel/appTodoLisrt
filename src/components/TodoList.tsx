import { useTodoStore } from "../store"
import { TodoDetails } from "./TodoDetails"


export const TodoList = () => {

  const todos = useTodoStore(state=>state.todos)


  return (
    <div className="w-full h-[calc(100vh-110px)] px-10 py-20">
      <div className="grid grid-cols-3 gap-5">
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