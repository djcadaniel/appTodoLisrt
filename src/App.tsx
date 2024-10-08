import { IoReloadCircle } from 'react-icons/io5'
import emptyTodo from '/img/todoList.svg'
import { IoMdAddCircle } from 'react-icons/io'
import { TodoForms } from './components/TodoForms'
import { TodoList } from './components/TodoList'
import { useModalStore, useTodoStore } from './store'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

function App() {

  // const [show, setShowTodo] = useState(false)
  const modal = useModalStore(state=>state.modal)
  const setModal = useModalStore(state=>state.setModal)
  const todos = useTodoStore(state=>state.todos)
  const resetTodos = useTodoStore(state=>state.resetTodo)
  
  const handleModal = ()=>{
    setModal()
  }
  
  const totalTodos = todos.length;
  const todosMarcados = todos.filter(todo => todo.complete).length
  const todosFaltantes = todos.filter(todo => !todo.complete).length
  const percentage = +((todosMarcados/totalTodos) * 100).toFixed(2)

  return (
    <div className='container__todo font-ibm'>
      <div className='w-full container mx-auto p-5 bg-slate-900 flex justify-between items-center'>
        <div className='hidden md:flex flex-col w-[45%] md:w-[20%]'>
          <span className='text-slate-100 text-lg md:text-2xl font-normal px-5 rounded-lg'>Cantidad: {totalTodos}</span>
          <span className='text-slate-100 text-lg md:text-2xl font-normal px-5 rounded-lg'>Completado: {todosMarcados}</span>
          <span className=' text-slate-100 text-lg md:text-2xl font-normal px-5 rounded-lg'>Faltan: {todosFaltantes}</span>
        </div>
        <div className='h-[150px]'>
          <CircularProgressbar 
            value={percentage}
            styles={buildStyles({
              pathColor: percentage === 100 ? '#31e3b4' : '#31e3b4',
              trailColor: 'F5F5F5',
              textSize: 17,
              textColor: percentage === 100 ? '#31e3b4' : '#31e3b4'
            })}
            text={`${percentage}%`}
            className='h-full'
          />
        </div>
        <div className='w-[100%] flex justify-between'>
          <h1 className='w-full font-black text-2xl md:text-4xl text-center text-[#31E3B4]'>
            Lista de {''}
            <span className="text-white">Actividades</span>
          </h1>
          <button className=' text-slate-100  rounded-lg mr-5' onClick={handleModal}>
            <IoMdAddCircle  className='text-[35px] md:text-[50px]'/>
          </button>
          <button className=' text-slate-100  rounded-lg mr-5' onClick={()=>resetTodos()}>
            <IoReloadCircle  className='text-[35px] md:text-[50px]'/>
          </button>
        </div>
      </div>
      <div className="relative w-full container mx-auto h-[calc(100vh-90px)]">
        {
          modal && (
            <>
              <div className='absolute top-0 left-0 w-full h-full opacity-95 z-50'>
                <div className='relative flex w-full h-full justify-center items-center'>
                  <div className='absolute top-0 left-0 w-full h-full glass-effect-container' onClick={handleModal}>
                  </div>
                  <TodoForms/>
                </div>
              </div>
            </>
          )
        }
        {
          (todos.length > 0) ? (
            <TodoList />
          ) : (
            <div className='w-full h-full flex justify-center items-center'>
              <figure>
                <img src={emptyTodo} alt="" />
              </figure>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App