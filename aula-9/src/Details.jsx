import { useParams } from "react-router-dom";
import Header from "./Header";
import Card from "./Card";
import "./index.css";

function Details() {
  const { id } = useParams();

  const navegadores = {
    "google-chrome": {
      name: "Google Chrome",
      description:
        "Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!",
      image: "https://1000logos.net/wp-content/uploads/2017/08/Chrome-Logo.png",
      url: "https://www.google.com/chrome/",
    },
    "mozilla-firefox": {
      name: "Mozilla Firefox",
      description:
        "Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e7/Firefox_logo%2C_2019.png",
      url: "https://www.mozilla.org/en-US/firefox/new/",
    },
    "microsoft-edge": {
      name: "Microsoft Edge",
      description:
        "Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer.",
      image:
        "https://files.tecnoblog.net/wp-content/uploads/2019/11/microsoft-edge-logotipo.jpg",
      url: "https://www.microsoft.com/edge",
    },
  };

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
