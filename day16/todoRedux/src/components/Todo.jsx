import { useEffect, useState } from "react"
import { Container,InputGroup,Form,Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, finalUpdate } from "../feature/todo/todoSlice"

const Todo = () =>{
    const taskList = useSelector(state => state.todos)
  
    const [task,setTask] = useState('')
    const [updateOrNot,setUpdateOrNot] = useState(false)
    const dispatch = useDispatch()
    const onAddHandler = () =>{
      dispatch(addTodo(task))
        setTask('')
        setUpdateOrNot(!updateOrNot)
    }

    const onUpdateTodo = () =>{
      const truedItem = taskList.filter(item => item.isUpdate === true)[0]
      dispatch(finalUpdate({id:truedItem.id,todo:task}))
      
      setUpdateOrNot(!updateOrNot)
      setTask('')
    }

    useEffect(()=>{
      const truedItem = taskList.filter(item => item.isUpdate===true)
      setTask(truedItem[0]?.text)
      setUpdateOrNot(!updateOrNot)
    },[taskList])

    return <Container>
              <InputGroup className="mt-3">
        <Form.Control
          placeholder="Enter Your Task"
        value={task}
        onChange={e => setTask(e.target.value)}
        />

      <Button variant="primary" onClick={!updateOrNot ? onUpdateTodo:onAddHandler}>{!updateOrNot?"Edit":"Add"}</Button>
      </InputGroup>

    </Container>
}

export default Todo