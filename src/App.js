import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
  <label for="field1">Field 1:</label>
  <input type="text" id="field1" name="field1"><br>

  <label for="field2">Field 2:</label>
  <input type="text" id="field2" name="field2"><br>

  <input type="submit" value="Submit">
</form>
        <p>
          I have just made some changes to this application.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
