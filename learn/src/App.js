import './App.css';

function Header({ title }) {
  return <h1>{title}</h1>
}


function App() {
  const frults = ['orange', 'apples', 'bananas'];

  return (
    <div className="App">
      <Header title="Favorite frults" />

      <ul>
        {frults.map((frult) => (
          <li>{frult}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
