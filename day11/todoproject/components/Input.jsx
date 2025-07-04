import { useState } from "react"
import { InputGroup,Form,Button } from "react-bootstrap"
const Input = ({onSubmit}) =>{

    const [todo,setTodo] = useState('')
    const onSubmitHandler = () =>{
      // console.log("Todo",todo)
      onSubmit(todo)// () 
      setTodo('')
    }  
return   <InputGroup className="mb-3 mt-3">
<Form.Control
  placeholder="Enter Your Todo..."
    value={todo}
    onChange={e => setTodo(e.target.value)}
/>

<Button variant="primary" onClick={onSubmitHandler} >Add</Button>
</InputGroup>
}

export default Input