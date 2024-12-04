// import logo from './logo.svg';
// import './App.css';
import FuncComp from "./Components/FuncComp";
import {ClassComp1,ClassComp} from "./Components/ClassComp";
import ClassProps from "./Props/ClassProps";
import FunctionalProps from "./Props/FunctionalProps";

function App() {
 return(
  <>
    {/* <FuncComp/>
    <ClassComp/>
    <ClassComp1/> */}

    {/* Props */}
      <ClassProps name ="Rk" place ="hyd"/>
      <ClassProps name ="KRk" place ="MDK"><p>Child Component</p></ClassProps>
      <ClassProps name ="Krishna" place ="Msd"><button>submit</button></ClassProps>

      <FunctionalProps/>
      <FunctionalProps name="Akhil" place="karimnagar"/>
  </>
 )
}

export default App;
