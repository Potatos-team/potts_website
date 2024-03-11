import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Petition from "./components/content/Petition/Petition";
import PetitionRequest from "./components/content/PetitionRequest/PetitionRequest";
import GeneratedPetition from "./components/content/GeneratedPetition/GeneratedPetition";
import ForbiddenPage from "./components/content/Forbidden/ForbiddenPage";

function App() {
  return (
    <>
      <Router>
        <div style={{ height: "100%" }}>
          <Routes>
            <Route
              exact
              path="/petitionRequest/:customer_id"
              element={<PetitionRequest />}
            />
            <Route path="/petition/:customer_id" element={<Petition />} />
            <Route path="/generatedPetition" element={<GeneratedPetition />} />
            <Route path="/forbidden/:customer_id" element={<ForbiddenPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
