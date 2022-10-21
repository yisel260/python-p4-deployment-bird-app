import { useState } from "react";
import { Link } from "react-router-dom";

function BirdCard({ bird }) {
  const { id, name, species, image } = bird;

  const [isInStock, setIsInStock] = useState(true);

  function handleToggleStock() {
    setIsInStock((isInStock) => !isInStock);
  }

  

  return (
    <li className="card">
      <Link to={`/birds/${id}`}>
      <img src={image} alt={name} />
      </Link>
      <h4>{name}</h4>
      <p>Species: {species}</p>
      {isInStock ? (
        <button className="primary" onClick={handleToggleStock}>
          Available for Events
        </button>
      ) : (
        <button onClick={handleToggleStock}>Fully Booked</button>
      )}
    </li>
  );
}

export default BirdCard;
