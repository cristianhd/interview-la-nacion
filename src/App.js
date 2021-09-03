import Body from "./Components/Body";
import CardFullScreen from "./Components/CardFullScreen";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import SubNavBar from "./Components/SubNavBar";
import {articles} from './articles.js'
import './Style/App.scss'

function App() {
  const article = articles[0]
  
  return (
    <div className="App">
      <nav>

        <NavBar />
      </nav>
        <SubNavBar />
      
     
        <CardFullScreen article ={article}/>
      
      <Body article = {article}/>
     
        <Footer />
     
    </div>
  );
}

export default App;
