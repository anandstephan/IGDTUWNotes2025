import { useState } from "react"
import { InputGroup,Form, Button } from "react-bootstrap"
//
const SearchBar = () =>{

  const [search,setSearch] = useState('')
  console.log(search)
return  <InputGroup className="mb-3">
<Form.Control
  placeholder="Search..."
value={search}
onChange={e => setSearch(e.target.value)}
/>

<Button variant="danger">Search...</Button>
</InputGroup>
}

export default SearchBar