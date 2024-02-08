import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './Home';
import AnswerNo from './AnswerNo';
import AnswerYes from './AnswerYes';
import Reasons from './Reasons';
import Yes from './Yes';


function App() {


  
  return (

    <div className="App">
        <Routes>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/noAnswer' element = {<AnswerNo />}></Route>
          <Route path='/yesAnswer' element = {<AnswerYes />}></Route>
          <Route path='/reasons' element = {<Reasons />}></Route>
          <Route path='//yes' element = {<Yes />}></Route>




        </Routes>

      


      
  

    </div>
  );
}

export default App;
