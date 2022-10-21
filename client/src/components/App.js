import { Routes, Route, useParams } from "react-router-dom";
import Header from "./Header";
import BirdPage from "./BirdPage";
import BirdCard from "./BirdCard"

function App() {
    return (
        <>
          <main>
            <Header />
            <Routes>
              <Route path="/birds/:id" element={ <BirdCard key={ id } /> }/>
              <Route path="/" element={ <BirdPage /> }/>
            </Routes>
          </main>
        </>
      );
}

export default App;
