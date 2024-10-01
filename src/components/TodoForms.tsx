import { useForm } from "react-hook-form"
import Error from "./Error"
import { DraftTodo } from "../types"
import { useTodoStore } from "../store"
import { useEffect } from "react"

export const TodoForms = () => {

  // const {addTodos} = useTodoStore()
  const addTodos = useTodoStore(state => state.addTodos)
  const activeId = useTodoStore(state => state.activeId)
  const todos = useTodoStore(state => state.todos)
  const updateTodo = useTodoStore(state => state.updateTodo)
  
  const {register, handleSubmit, setValue, formState: {errors}, reset} = useForm<DraftTodo>()

  useEffect(()=>{
    if(activeId){
      const activeTodo = todos.filter(todo=> todo.id === activeId)[0]
      setValue('name', activeTodo.name)
      setValue('priority', activeTodo.priority)
    }
  },[activeId])

   const registerTodo = (data: DraftTodo)=>{
    if(activeId){
      updateTodo(data)
    }else{
      addTodos(data)
    }
    reset()
   }

  return (
    <form 
      className='w-2/5 bg-[#67C86C] p-10 flex flex-col gap-5 rounded-md'
      noValidate
      onSubmit={handleSubmit(registerTodo)}
    >
      <h1 className='text-center text-2xl text-[#38374D] font-semibold'>Nueva Actividad</h1>
      <div className='flex flex-col gap-3'>
        {/* <label htmlFor="Nombre">Nombre</label> */}
        <input 
          id='name'
          type="text" 
          className='px-5 py-2 rounded-md'
          placeholder='Ingresa nombre de actividad' 
          {...register('name', {
            required: 'El nombre de la actividad es obligatorio'
          })}
        />
        {errors.name && (
          <Error>
            {errors.name?.message?.toString()}
          </Error>
        )}
      </div>
      <div className='flex flex-col gap-3'>
        {/* <label htmlFor="Nombre">Nombre</label> */}
        <input 
          id='priority'
          type="text" 
          className='px-5 py-2 rounded-md'
          placeholder='Ingresa nombre de prioridad' 
          {...register('priority', {
            required: 'El prioridad de la actividad es obligatorio'
          })}
        />
        {errors.priority && (
          <Error>
            {errors.priority?.message?.toString()}
          </Error>
        )}
      </div>
      <input 
        type="submit" 
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
        value='Guardar paciente'
      />
    </form>
  )
}