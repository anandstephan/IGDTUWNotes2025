import { ListGroup } from "react-bootstrap"
import ListItem from "./ListItem"

const List = ({taskList,onDelete}) =>{
return <ListGroup>
        {taskList.map((item,idx) => <ListItem key={idx} item={item} onDelete={onDelete}/>)}
</ListGroup>
}

export default List