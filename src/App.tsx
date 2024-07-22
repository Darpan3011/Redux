import Add from './Add'
import All from './All'

function App() {
  return (
    <div className="container mx-auto p-4 ">
      <h1 className='text-4xl text-center mb-3'>ToDo List</h1>
      <All />
      <Add />
    </div>
  )
}

export default App
