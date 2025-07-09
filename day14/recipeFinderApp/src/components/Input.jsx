import { useState } from "react"
import { Container, Form, InputGroup,Button } from "react-bootstrap"

const Input = () =>{

    const [search,setSearch] = useState('')

return <Container>
     <InputGroup className="mt-3">
        <Form.Control
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

      <Button variant="primary">Search...</Button>
      </InputGroup>
</Container>
}

export default Input