import react, {Component, components} from 'react'
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet' ;
import Welcome from './components/Welcome'
import Message from './components/message'
import Counter from './components/counter'

class App extends Component {
 render() {
  return (
    <div className="App">
  <Counter/>
      {/* <Message/> */}
      {/* <Greet name="Tesfu"   heroName="Ronaldo"/>
      <p>this the sample of react</p>
      <Greet name="Gelila"   heronNme="Messi"/>
      <button>the button of react</button>
      <Greet name="Sami"     heroName="Sergio ramos"/> */}

      {/* <Welcome/> */}

    </div>
  );
 }
}

export default App;
