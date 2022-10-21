import { useState } from "react";
import NewBirdForm from "./NewBirdForm";
import BirdList from "./BirdList";
import Search from "./Search";

function BirdPage({birds, onUpdateBirds}) {
  
  const [searchTerm, setSearchTerm] = useState("");

  function handleAddBird(newBird) {
    const updatedBirdsArray = [...birds, newBird];
    onUpdateBirds(updatedBirdsArray);
  }

  const displayedBirds = birds.filter((bird) => {
    return bird.name.toLowerCase().includes(searchTerm.toLowerCase());
  });



  return (
    <main>
      <NewBirdForm onAddBird={handleAddBird} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <BirdList birds={displayedBirds} />
    </main>
  );
}

export default BirdPage;
