import { Container,Image } from "react-bootstrap"

const MainVideo = ({mainVideo}) =>{
        console.log("mainVideo",mainVideo)
if(mainVideo===null) return <h1>Loading...</h1>
        let videoSrc = `https://www.youtube.com/embed/${mainVideo?.id.videoId}`
        console.log(videoSrc)
return <Container>
        {/* <Image
        src={mainVideo.snippet.thumbnails.high.url}
        thumbnail
        /> */}
        <iframe src={videoSrc} 
        width={'100%'}
        height={400}
        />
        <h5>{mainVideo.snippet.channelTitle}</h5>
        <p>{mainVideo.snippet.description}</p>
        </Container>
}

export default MainVideo