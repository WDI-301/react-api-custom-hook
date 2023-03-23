import logo from './logo.svg';
import './App.css';
import useAPI from './hooks/useAPI'
import useInput from './hooks/useInput'

function App() {
  // console.log(useAPI('users',2));

  //custom Hook for input
  const route = useInput('route')
  const id = useInput('id')

  console.log('!@-------useAPI-------@!')
  console.log(useAPI(route.value, id.value).name)
  let name = useAPI(route.value, id.value).name
  

  return (
    <div className="App App-header">
      <h1>Custom API Hooks</h1>
      Route:<input {...route} />
      Id: <input {...id} />
      Name:{name}
      <p>------------------------------</p>
      
      <button onClick={useAPI(route.value, id.value)}>Query</button>
    
    </div>
  );
}

export default App;
