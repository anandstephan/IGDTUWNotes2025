import { Container,Card } from "react-bootstrap"

const RecipeCard = ({recipe}) =>{
  console.log(recipe.recipe)
return <Container className="mt-3">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={recipe.recipe.image} />
      <Card.Body>
        <Card.Title>{recipe.recipe.label}</Card.Title>
        <Card.Text>
          <ul>
          {recipe.recipe.ingredientLines.map(ingredient => <li> {ingredient}</li>)}
          </ul>

        </Card.Text>

      </Card.Body>
    </Card>
</Container>
}

export default RecipeCard