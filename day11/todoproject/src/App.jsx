import {Container} from 'react-bootstrap'
import Input from '../components/Input'
import List from '../components/List'
const App = () =>{
return <Container className='text-center'>
  <h1>Todo App</h1>
  <Input/>
  <List/>
</Container>
}

export default App