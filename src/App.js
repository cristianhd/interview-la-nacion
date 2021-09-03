import Body from "./Components/Body";
import CardFullScreen from "./Components/CardFullScreen";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import SubNavBar from "./Components/SubNavBar";
import {articles} from './articles.js'

function App() {
  const article = articles[0]
  
  return (
    <div className="App">
      <nav>
        <NavBar />
        <SubNavBar />
      </nav>
      <header>
        <CardFullScreen article ={article}/>
      </header>
      <Body article = {article}/>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
