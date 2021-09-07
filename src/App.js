import CardFullScreen from "./Components/Header/CardFullScreen";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import SubNavBar from "./Components/NavBar/SubNavBar.js";
import { ARTICLES } from "./DataDummy/articles.js";
import "./Style/App.scss";
import Main from "./Components/Main/Main";
import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    setArticles(ARTICLES);
  }, [articles]);

  return (
    <div className="App">
      <nav className="navbar">
        <NavBar />
      </nav>
      <nav>
        <SubNavBar />
      </nav>
      <header>{articles && <CardFullScreen article={articles[0]} />}</header>

      {articles && <Main articles={articles} />}

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
