import { useParams } from "react-router-dom";
import Header from "./Header";
import Card from "./Card";
import "./index.css";
import { useEffect, useState } from "react";

function Details() {
  const { id } = useParams();
  const [navegadores, setNavegadores] = useState({});

  useEffect(() => {
    fetch("https://mocki.io/v1/dd2e43a2-38af-41a2-843f-801ad8011580").then(
      (response) => response.json()
    ).then((data) => {
      setNavegadores(data)
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="card-container">
        <Card
          title={navegadores[id]?.name || "Navegador não encontrado."}
          description={navegadores[id]?.description}
          link={navegadores[id]?.url}
          image={navegadores[id]?.image}
        />
      </div>
    </div>
  );
}

export default Details;
