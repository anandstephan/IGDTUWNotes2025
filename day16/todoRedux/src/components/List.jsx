import { Container } from "react-bootstrap"
import ListItem from "./ListItem"
import { useSelector } from "react-redux"

const List = () =>{
    const list = useSelector(state => state.todos)
    
    return <Container> {list.map(item => <ListItem item={item}/>)}</Container>

}

export default List