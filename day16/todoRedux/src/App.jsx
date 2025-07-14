import { Provider } from "react-redux"
import Todo from "./components/Todo"
import { store } from "./app/store"
import List from "./components/List"

const App = () =>{
return <Provider store={store}>
      <Todo/>
      <List/>
</Provider>
}

export default App