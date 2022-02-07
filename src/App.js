import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <ItemListContainer greeting={"Welcome!"} />
      <ItemDetailContainer />
    </div>
);
}

export default App;