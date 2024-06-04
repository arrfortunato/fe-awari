
import Header from "./Header";
import Card from "./Card";
import './index.css';

function Home() {
  return (
    <div>
      <Header />
      <div className="card-container">
        <Card
          title="Google Chrome"
          description="Google Chrome is a web browser developed by Google, released in 2008."
          link="/details/google-chrome"
        />
        <Card
          title="Mozilla Firefox"
          description="Mozilla Firefox is an open-source web browser developed by Mozilla."
          link="/details/mozilla-firefox"
        />
        <Card
          title="Microsoft Edge"
          description="Microsoft Edge is a web browser developed by Microsoft, released in 2015."
          link="/details/microsoft-edge"
        />
      </div>
    </div>
  );
}

export default Home;
