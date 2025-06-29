import { useState } from 'react'
import {Container,Card,Button} from 'react-bootstrap'

const Hero = (props) =>{
    let [name,setName] =  useState(props.heroName) // '',boolean,[],{},null
    const [btnTxt,setBtnTxt] = useState(false)
    const [bgColor,setBgColor] = useState('blue')
    const nameChangeHandler = () =>{
        setName('Natasha Romanoff')
        setBtnTxt(true)
        setBgColor('pink')
    }
return <Container>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} width={200} height={200} />
      <Card.Body style={{backgroundColor:bgColor}}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            {props.descprition}
        </Card.Text>
        <Button variant="primary" onClick={()=>nameChangeHandler()}>{btnTxt ? 'goregeous Girl' :'Take Action'}</Button>
      </Card.Body>
    </Card>
 
</Container>
}

export default Hero