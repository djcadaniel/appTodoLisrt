import { IoReloadCircle } from 'react-icons/io5'
import emptyTodo from '/img/todoList.svg'
import { IoMdAddCircle } from 'react-icons/io'
import { TodoForms } from './components/TodoForms'
import { TodoList } from './components/TodoList'
import { useModalStore, useTodoStore } from './store'

function App() {

  // const [show, setShowTodo] = useState(false)
  const modal = useModalStore(state=>state.modal)
  const setModal = useModalStore(state=>state.setModal)
  const todos = useTodoStore(state=>state.todos)
  

  const handleModal = ()=>{
    setModal()
  }

  return (
    <>
      <div className='w-full container mx-auto p-5 bg-[#38374D] flex justify-between items-center'>
        <span className=' text-slate-100 text-2xl font-bold px-5 py-2 rounded-lg'>Cantidad:</span>
        <h1 className='w-full font-black text-4xl text-center text-[#67C86C]'>
          Lista de {''}
          <span className="text-white">Actividades</span>
        </h1>
        <button className=' text-slate-100  rounded-lg mr-5' onClick={handleModal}>
          <IoMdAddCircle  className='text-[50px]'/>
        </button>
        <button className=' text-slate-100  rounded-lg mr-5'>
          <IoReloadCircle  className='text-[50px]'/>
        </button>
      </div>
      <div className="relative w-full container mx-auto h-[calc(100vh-90px)]">
        {
          modal && (
            <div className='absolute top-0 left-0 bg-slate-700 w-full h-full opacity-95'>
              <div className='flex w-full h-full justify-center items-center'>
                <TodoForms />
              </div>
            </div>
          )
        }
        {
          (todos.length > 0) ? (
            <TodoList />
          ) : (
            <div className='w-full bg-[#67C86C] h-full flex justify-center items-center'>
              <figure>
                <img src={emptyTodo} alt="" />
              </figure>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App