import { Col, Container, Row } from "react-bootstrap"
import MainVideo from "./components/MainVideo"
import List from "./components/List"
import SearchBar from "./components/SearchBar"

const App = () =>{
return <Container className="mt-4" >
  <SearchBar/>
  <Row>
    <Col sm={8}>
    <MainVideo/>
    </Col>
    <Col sm={4} >
    <List/>
    </Col>
  </Row>
</Container>
}

export default App