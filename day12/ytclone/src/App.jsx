import { Col, Container, Row } from "react-bootstrap"
import MainVideo from "./components/MainVideo"
import List from "./components/List"
import SearchBar from "./components/SearchBar"
import { useEffect, useState } from "react"
import youtube from "./api/youtube"

const App = () =>{

  const [mainVideo,setMainVideo] = useState(null)
  const [list,setList] = useState([])
  const [searchValue,setSearchValue] = useState('reactnative')
console.log("A")
  useEffect(()=>{
   async function getData(){
      const response = await youtube.get('search',{
        params:{
          part:"snippet",
          maxResults:5,
          key:"AIzaSyBjsoqhon_F2OFxz5C7odf_K77B_sSMSj0",
          q:searchValue
        }
      })
      // console.log(response.data,"==>response")
      setMainVideo(response.data.items[0])
      setList(response.data.items)
    }
    getData()
  },[searchValue])

   

return <Container className="mt-4" >
  <SearchBar onSearch={setSearchValue}/>
  <Row>
    <Col sm={8}>
    <MainVideo mainVideo={mainVideo}/>
    </Col>
    <Col sm={4} >
    <List list={list} setMainVideo={setMainVideo}/>
    </Col>
  </Row>
</Container>
}

export default App