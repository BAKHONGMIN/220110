import logo from './logo.svg';
import Gnb from './Gnb';
// 여기 삽입
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Gnb></Gnb>
        {/* 여기 삽입 */}
      </header>
    </div>
  );
}

export default App;
