import Body from "./Components/Body";
import CardFullScreen from "./Components/CardFullScreen";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import SubNavBar from "./Components/SubNavBar";
import {articles} from './articles.js'
import './Style/App.scss'
import Cabezal from "./Components/Cabezal";
import MegaLateral from "./Components/MegaLateral";

function App() {
  const article = articles[0]
  
  return (
    <div className="App">
      <nav className='navbar'>

        <NavBar />
      </nav>
        <SubNavBar />
      <header>

        <CardFullScreen article ={article}/>
      </header>
        <div className='main'>

      <div className='wrap-body'>
          

      <Cabezal/>
     
      
      <Body article = {article}/>
          </div>
          <div className='sidebar'>
            <MegaLateral/>
          </div>
        </div>
        
    <footer>

        <Footer />
    </footer>
     
    </div>
  );
}

export default App;
