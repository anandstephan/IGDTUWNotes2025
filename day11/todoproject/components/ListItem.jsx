import { ListGroup } from "react-bootstrap"

const ListItem = ({item,onDelete}) =>{
    const onDeleteHandler = (item) =>{
        onDelete(item)
    }
return  <ListGroup.Item onDoubleClick={()=>onDeleteHandler(item)}>{item}</ListGroup.Item>
}

export default ListItem