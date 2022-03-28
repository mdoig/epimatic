import logo from './logo.svg';
import './App.css';
import { EpisodeGenerator } from './episodeGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Eps From a Hat
        </p>
        <div><EpisodeGenerator /></div>
      <p class="App-licenses">
        Copyright © 2022 <a href="https://github.com/mdoig" target="_blank" rel="noopener noreferrer">Marshall Doig</a>
        <br />
        <a href="https://github.com/mdoig/eps-from-a-hat" target="_blank" rel="noopener noreferrer">This app</a> was bootstrapped with <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">Create React App</a>.
        Licensed as <a href="https://mit-license.org/" target="_blank" rel="noopener noreferrer">MIT</a>.
        Data provided by the <a href="https://www.tvmaze.com/" target="_blank" rel="noopener noreferrer">TVmaze.com</a> <a href="https://api.tvmaze.com/" target="_blank" rel="noopener noreferrer">API</a>.
        Licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>.
      </p>
      </header>
    </div>
  );
}

export default App;
