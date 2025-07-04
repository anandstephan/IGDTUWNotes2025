import { InputGroup,Form, Button } from "react-bootstrap"

const SearchBar = () =>{
return  <InputGroup className="mb-3">
<Form.Control
  placeholder="Search..."

/>

<Button variant="danger">Search...</Button>
</InputGroup>
}

export default SearchBar