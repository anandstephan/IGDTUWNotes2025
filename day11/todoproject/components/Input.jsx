import { useState } from "react"
import { InputGroup,Form,Button } from "react-bootstrap"
const Input = () =>{
  

    const [todo,setTodo] = useState('')
    console.log(todo)
return   <InputGroup className="mb-3 mt-3">
<Form.Control
  placeholder="Enter Your Todo..."
    value={todo}
    onChange={e => setTodo(e.target.value)}
/>

<Button variant="primary" >Add</Button>
</InputGroup>
}

export default Input