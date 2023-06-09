import './App.css';
import TestOne from './components/testone';
import TestTwo from './components/testtwo';
import TestThree from './components/testthree';


function App() {
  return (
    <div className="App" 
      style={{
        textAlign: "left",
        maxWidth: "768px",
        display: "block",
        margin: "0 auto"
    }}>
      <TestOne />
      <TestTwo />
      <TestThree />
    </div>
  );
}

export default App;
