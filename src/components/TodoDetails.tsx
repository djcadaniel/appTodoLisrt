

import { TodoDetailsItem } from "./TodoDetailsItem"

import { Todo } from "../types"

interface TodoDetailsProps {
  todo: Todo
}

export const TodoDetails = ({todo}: TodoDetailsProps) => {

  return (
    <div className={`${todo.complete ? 'glass-effect-active' : 'glass-effect-deactive'} glass-effect rounded-xl p-5 flex flex-col items-start border border-[#7ee3c8]`}>
      <div className="text-white w-full py-5">
        <TodoDetailsItem todo={todo} />
      </div>
      
    </div>
  )
}