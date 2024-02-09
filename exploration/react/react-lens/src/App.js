import {useState} from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  console.log('redraw');
  return <button onClick={() => setValue(value + 1)}>{value}</button>;
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        react
      </header>
      <Counter />
    </div>
  );
}

export default App;
