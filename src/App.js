import Body from "./Components/Main/Body";
import CardFullScreen from "./Components/Header/CardFullScreen";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import SubNavBar from "./Components/NavBar/SubNavBar.js";
import Cabezal from "./Components/Main/Cabezal";
import MegaLateral from "./Components/Main/MegaLateral";
import { articles } from "./articles.js";
import "./Style/App.scss";

function App() {
  const article = articles[0];

  return (
    <div className="App">
      <nav className="navbar">
        <NavBar />
      </nav>
      <SubNavBar />
      <header>
        <CardFullScreen article={article} />
      </header>

      <div className="main">
        <div className="wrap-body">
          <Cabezal />
          <Body articles={articles} />
        </div>
        <div className="sidebar">
          <MegaLateral />
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
