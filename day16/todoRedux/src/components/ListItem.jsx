import { Row,Col, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { changeUpdateState, removeTodo } from "../feature/todo/todoSlice"

const ListItem = ({item}) =>{
    const dispatch = useDispatch()
    console.log(item)
    const onDeleteHandler = id =>{
        console.log(id,"KKK")
        dispatch(removeTodo(id))
    }
    const onUpdateHandler = id =>{
        dispatch(changeUpdateState(id))
    }

return <Row className="mt-2">
        <Col>{item.text} </Col>
        <Col><Button variant="danger" onClick={()=>onDeleteHandler(item.id)}>Delete</Button></Col>
        <Col><Button variant="info" onClick={()=>onUpdateHandler(item.id)}>Update</Button></Col>
        
</Row>
}

export default ListItem