import { Container,Image } from "react-bootstrap"

const MainVideo = ({mainVideo}) =>{
        // console.log("mainVideo",mainVideo)

if(mainVideo===null) return <h1>Loading...</h1>
return <Container>
        <Image
        src={mainVideo.snippet.thumbnails.high.url}
        thumbnail
        />
        <h5>{mainVideo.snippet.channelTitle}</h5>
        <p>{mainVideo.snippet.description}</p>
        </Container>
}

export default MainVideo