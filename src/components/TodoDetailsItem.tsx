type TodoDetailsItem = {
  label: string
  data: string
}

export const TodoDetailsItem = ({label, data}: TodoDetailsItem) => {
  return (
    <div>
      {label}: {''}
      <span className="font-normal normal-case">{data}</span>
    </div>
  )
}