import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import BirdPage from "./BirdPage";
import BirdDetail from "./BirdDetail"

function App() {


    return (
        <>
          <main>
            <Header />
            <Routes>
              <Route path="/birds/:id" element={ <BirdDetail /> }/>
              <Route path="/birds" element={ <BirdPage /> }/>
            </Routes>
          </main>
        </>
      );
}

export default App;
