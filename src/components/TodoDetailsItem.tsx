type TodoDetailsItem = {
  name: string,
  priority: string
}

export const TodoDetailsItem = ({name, priority}: TodoDetailsItem) => {
  return (
    <div className="">
      <span className="font-normal normal-case break-words">{name}</span>
      <span className="font-normal normal-case break-words">{priority}</span>
    </div>
  )
}