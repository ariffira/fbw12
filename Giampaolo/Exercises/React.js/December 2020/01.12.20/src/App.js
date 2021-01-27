//import './App.css';
import TopMenu from './components/TopMenu';
import Footer from './components/Footer';
// bootstrap import
// import 'bootstrap/dist/css/bootstrap.min.css';
//css import
import './main.css';
import Pictures, { Picture1, Picture2 } from './components/Pictures';
import { Multiplication, Division } from "./components/Calculator";
import { FriendList } from './components/FriendList';

function App() {
  return (
      <div id="mainDiv" className="container">
      <TopMenu/>
      <Multiplication a={20} b={30} option={'Multiply'}/>
      {/* <Division/> */}
      <Pictures/>
      <Picture1/>
      <Picture2/>
      <FriendList/>
      <Footer/>
      </div>
  );
}

export default App;