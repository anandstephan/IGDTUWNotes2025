import {Container} from 'react-bootstrap'
import UserForm from './components/UserForm'
import { useState } from 'react'
import UsersTable from './components/UserTable'
const App = () =>{

  const [load,setLoad] = useState(false)

return <Container>
  {!load ? <UsersTable/> :<UserForm setLoad={setLoad}/>}
</Container>
}

export default App