import { useState } from "react"
import { InputGroup,Form, Button } from "react-bootstrap"
//
const SearchBar = ({onSearch}) =>{

  const [search,setSearch] = useState('')
  console.log(search)
return  <InputGroup className="mb-3">
<Form.Control
  placeholder="Search..."
value={search}
onChange={e => setSearch(e.target.value)}
/>

<Button variant="danger" onClick={()=>{
  onSearch(search)
  setSearch('')
}}>Search...</Button>
</InputGroup>
}

export default SearchBar