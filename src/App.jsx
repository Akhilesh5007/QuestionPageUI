import './App.css';
import {Header} from '../src/Component/header';//quki headerfolder ke under index hai to directly usi ko use krlega
import {Question} from '../src/Component/question/question';
import {Footer} from '../src/Component/footer/footer';
function App() {
  return <>
  <h5 className="heading">I am App component</h5>
  <Header/>
  <Question/>
  <Footer/>
  </>    
}
export default App
