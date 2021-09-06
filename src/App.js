import Body from "./Components/Body";
import CardFullScreen from "./Components/CardFullScreen";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import SubNavBar from "./Components/SubNavBar";
import {articles} from './articles.js'
import './Style/App.scss'
import Cabezal from "./Components/Cabezal";

function App() {
  const article = articles[0]
  
  return (
    <div className="App">
      <nav className='navbar'>

        <NavBar />
      </nav>
        <SubNavBar />
        <CardFullScreen article ={article}/>
      <div className='wrap-body'>
          

      <Cabezal/>
     
      
      <Body article = {article}/>
          </div>
        
     
        <Footer />
     
    </div>
  );
}

export default App;
