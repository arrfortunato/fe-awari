import { Link } from "react-router-dom";

import "./Card.css";

function Card({ title, description, image, link }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      {image && <img className="card-image" src={image} alt={title} />}
      <Link to={link}>Saiba mais</Link>
    </div>
  );
}

export default Card;
