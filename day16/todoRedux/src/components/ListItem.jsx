import { Row,Col, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { removeTodo } from "../feature/todo/todoSlice"

const ListItem = ({item}) =>{
    const dispatch = useDispatch()
    console.log(item)
    const onDeleteHandler = id =>{
        console.log(id,"KKK")
        dispatch(removeTodo(id))
    }
return <Row className="mt-2">
        <Col>{item.text} </Col>
        <Col><Button variant="danger" onClick={()=>onDeleteHandler(item.id)}>Delete</Button></Col>
        
</Row>
}

export default ListItem