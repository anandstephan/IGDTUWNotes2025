import { Container,Row,Col } from "react-bootstrap"
import Input from "./components/Input"
import RecipeCard from "./components/RecipeCard"
import { useEffect, useState } from "react"

const App = () =>{

  const [recipes,setRecipes] = useState([])
  const [search,setSearch] = useState('icecream')

  const fetchRecipes = async (searchTerm) =>{
    const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=feff5efa&app_key=d43fccfd7f8e7f78a0dd7c00a6919ebf`,{
       method: "GET",
  headers: {
    "Edamam-Account-User": "App"  
  }
    })
    const response = await res.json()
    setRecipes(response.hits)
  }

  useEffect(()=>{
    fetchRecipes(search)
  },[search])


return <Container className="text-center">
    <Input onSearchHandler={setSearch}/>
    <Row>
      {recipes.map(item => <Col><RecipeCard recipe={item}/></Col>)}

    </Row>



</Container>
}

export default App