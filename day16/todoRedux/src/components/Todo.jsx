import { useState } from "react"
import { Container,InputGroup,Form,Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { addTodo } from "../feature/todo/todoSlice"

const Todo = () =>{

    const [task,setTask] = useState('')
    const dispatch = useDispatch()
    const onAddHandler = () =>{

      //{type:"todo/addTodo",payload:task}
        dispatch(addTodo(task))
        setTask('')
    }

    return <Container>
              <InputGroup className="mt-3">
        <Form.Control
          placeholder="Enter Your Task"
        value={task}
        onChange={e => setTask(e.target.value)}
        />

      <Button variant="primary" onClick={onAddHandler}>Add Task</Button>
      </InputGroup>

    </Container>
}

export default Todo