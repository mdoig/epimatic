import './App.css';
import { EpisodeGenerator } from './episodeGenerator';

function App() {
  return (
    <div className="App">
      <div className="App-main">
        <h1 className="App-name">EpiMatic</h1>
        <h2 className="App-description">A random TV episode generator for when you don't know what to watch</h2>
        <div id="episode-generator"><EpisodeGenerator /></div>
      </div>
      <footer className="App-licenses">
        Copyright © 2022 <a href="https://github.com/mdoig" target="_blank" rel="noopener noreferrer">Marshall Doig</a>
        <br />
        <a href="https://github.com/mdoig/epimatic" target="_blank" rel="noopener noreferrer">This app</a> was bootstrapped with <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">Create React App</a>. &nbsp;
        Licensed as <a href="https://mit-license.org/" target="_blank" rel="noopener noreferrer">MIT</a>. &nbsp;
        Data provided by the <a href="https://www.tvmaze.com/" target="_blank" rel="noopener noreferrer">TVmaze.com</a> <a href="https://api.tvmaze.com/" target="_blank" rel="noopener noreferrer">API</a>. &nbsp;
        Licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>.
      </footer>
    </div>
  );
}

export default App;
