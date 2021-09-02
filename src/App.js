import Body from "./Components/Body";
import CardFullScreen from "./Components/CardFullScreen";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import SubNavBar from "./Components/SubNavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SubNavBar/>
      <CardFullScreen/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
