import { Container } from "react-bootstrap"
import LisItem from "./ListItem"

const List = () =>{
    const arr  =[1,2,3,4,5]
return <Container>
    {arr.map(item => <LisItem/>)}
</Container>
}

export default List