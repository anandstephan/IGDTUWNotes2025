import { useState } from 'react'
import {Container,InputGroup,Form,Button,ListGroup} from 'react-bootstrap'
const App = () =>{

  const [todo,setTodo] = useState('')
  const [list,setList] = useState([])
  

  const onAddHandler = () =>{
   
      let newarr = [...list]//new ref
      newarr.push(todo)//new ref push
      setList(newarr)//setter function has to passed new ref
      setTodo('')
  
  }

  const DeleteHandler = (item) =>{

      let newarr = list.filter(task => task!==item) // saumya!==monika // monika!==monika // bhavya!==monika // anshika!==monika // priyanshi!==monika
      setList(newarr)
  }

return <Container className='text-center'>
    <h1>Todo App</h1>
    <InputGroup className="mb-3 mt-3">
        <Form.Control
          placeholder="Enter Your Todo..."
          value={todo}
          onChange={e => setTodo(e.target.value)}
       
       />
        <Button variant="primary" onClick={onAddHandler}>Add</Button>
      </InputGroup>
      <ListGroup>
        {list.map((item,idx) => <ListGroup.Item key={idx} onDoubleClick={()=>DeleteHandler(item)}>{item}</ListGroup.Item>)}
    
    </ListGroup>
</Container>
}

export default App