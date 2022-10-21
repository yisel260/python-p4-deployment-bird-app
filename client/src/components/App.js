import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import BirdPage from "./BirdPage";
import BirdDetail from "./BirdDetail"

function App() {

const [birds, setBirds] = useState([]);

  useEffect(() => {
    fetch("/birds")
      .then((r) => r.json())
      .then((birdsArray) => {
        setBirds(birdsArray);
      });
  }, []);

  if(!birds) return <h1>...loading</h1>

    return (
        <>
          <main>
            <Header />
            <Routes>
              <Route path="/birds/:id" element={ <BirdDetail /> }/>
              <Route path="/birds" element={ <BirdPage birds={birds} onUpdateBirds={setBirds}/> }/>
            </Routes>
          </main>
        </>
      );
}

export default App;
