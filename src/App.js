import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Views
import Home from "./Views/Home.js"
import Offers from "./Views/Offers.js"
import Instruments from "./Views/Instruments.js"
import Amplifiers from "./Views/Amplifiers.js"
import MultiEffects from "./Views/Multi-Effects.js"
import Error from "./Views/Error.js"


function App() {
  return (
    <div className="app">
      <Router>
        <NavBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/instruments" element={<Instruments />} />
            <Route path="/amplifiers" element={<Amplifiers />} />
            <Route path="/stompboxes-Multieffects" element={<MultiEffects />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </NavBar>
      </Router>
      {/*<ItemListContainer />*/}
      {/*<ItemDetailContainer />*/}
    </div>
);
}

export default App;