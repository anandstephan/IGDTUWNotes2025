import { ListGroup } from "react-bootstrap"
import ListItem from "./ListItem"

const List = () =>{
return <ListGroup>
        {[1,2,3].map((item,idx) => <ListItem key={idx}/>)}
</ListGroup>
}

export default List