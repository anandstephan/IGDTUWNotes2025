import { Row,Col, Container } from "react-bootstrap";
import Hero from "./components/Hero"
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () =>{
  const arr = [{
    heroName:"Black widow",
    desc:"Most beautiful girl",
    pic:"https://images.unsplash.com/photo-1621453207135-e55da77bc342?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjB3aWRvd3xlbnwwfHwwfHx8MA%3D%3D"
  }, ]

  return <Container>
    <h1 className="text-center">Marvel Stars</h1>
    <Row>
      {
        arr.map(item => <Col className="mb-3" key={item.heroName}><Hero heroName={item.heroName} descprition={item.desc} img={item.pic}/></Col>)
      }
    </Row>
   
  </Container>
}

export default App