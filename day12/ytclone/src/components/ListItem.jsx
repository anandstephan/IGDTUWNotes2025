import { Container, Row,Col,Image } from "react-bootstrap"

const LisItem = () =>{
return <Container className="mb-3">
        <Row>
            <Col sm={6}>
            <Image
        src="https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW5zfGVufDB8fDB8fHww"
        thumbnail
        />
            </Col>
            <Col sm={6}>
            Lorem ipsum dolor sit amet
            </Col>
        </Row>
</Container>
}

export default LisItem