

import { TodoDetailsItem } from "./TodoDetailsItem"

import { Todo } from "../types"

interface TodoDetailsProps {
  todo: Todo
}

export const TodoDetails = ({todo}: TodoDetailsProps) => {

  return (
    <div className={`${todo.complete ? 'bg-[#4f864e]' : 'bg-slate-700'} rounded-xl p-5 flex flex-col items-start shadow-sm shadow-lg-left shadow-lg-right shadow-slate-400`}>
      <div className="text-white w-full py-5">
        <TodoDetailsItem todo={todo} />
      </div>
      
    </div>
  )
}