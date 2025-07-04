import {Container} from 'react-bootstrap'
import Input from '../components/Input'
import List from '../components/List'
import { useState } from 'react'
const App = () =>{


  const [taskList,setTaskList] = useState([])
  const onAddTodo = (todo) =>{
    let newTaskList = [...taskList]
    newTaskList.push(todo)// ['task1']
    setTaskList(newTaskList)
  }

  const onDelete = (clickOnthatItem) =>{
    let updatedList = taskList.filter(item => item!==clickOnthatItem)
    setTaskList(updatedList)
  }


return <Container className='text-center'>
  <h1>Todo App</h1> 

  <Input onSubmit={onAddTodo}/>
  <List taskList={taskList} onDelete={onDelete}/>
</Container>
}

export default App