import { Container, Row,Col,Image } from "react-bootstrap"

const LisItem = ({videoDetail}) =>{

    console.log(videoDetail)
return <Container className="mb-3">
        <Row>
            <Col sm={6}>
            <Image
        src={videoDetail.snippet.thumbnails.medium.url}
          thumbnail
        />
            </Col>
            <Col sm={6}>
            {videoDetail.snippet.channelTitle}
            </Col>
        </Row>
</Container>
}

export default LisItem