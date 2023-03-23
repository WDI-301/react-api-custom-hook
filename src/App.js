import logo from './logo.svg';
import './App.css';
import useAPI from './hooks/useAPI'

function App() {
  // console.log(useAPI('users',2));

  //custom Hook for input

  return (
    <div className="App App-header">
      <h1>Custom API Hooks</h1>
      {/* input route
      input id
      button query sends to useAPI hook */}
    </div>
  );
}

export default App;
