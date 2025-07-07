import { Container } from "react-bootstrap"
import LisItem from "./ListItem"

const List = ({list}) =>{

return <Container>
    {list.map(item => <LisItem videoDetail={item}/>)}
</Container>
}

export default List