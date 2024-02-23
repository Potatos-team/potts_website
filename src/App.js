import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Petition from "./components/content/Petition/Petition";
import PetitionRequest from "./components/content/PetitionRequest/PetitionRequest";
import GeneratedPetition from "./components/content/GeneratedPetition/GeneratedPetition";

function App() {
  return (
    <>
      <Router>
        <div style={{ height: "100%" }}>
          <Routes>
            <Route exact path="/petitionRequest" element={<PetitionRequest />} />
            <Route path="/petition" element={<Petition />} />
            <Route path="/generatedPetition" element={<GeneratedPetition />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
