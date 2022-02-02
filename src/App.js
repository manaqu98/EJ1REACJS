import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="app">
      <NavBar/>
      <ItemListContainer greeting={"Welcome!"} />
    </div>
);
}

export default App;