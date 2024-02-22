import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Petition from "./components/content/Petition/Petition";
import PetitionRequest from "./components/content/PetitionRequest/PetitionRequest";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/petitionRequest" element={<PetitionRequest />} />
            <Route path="/petition" element={<Petition />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
