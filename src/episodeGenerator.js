import React from 'react';
import './episodeGenerator.css';

export class EpisodeGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      episode: '',
      episodeHidden: true,
      search: '',
      searchResultsHidden: true,
      selectedShow: '',
      shows: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.resetHandleClick = this.resetHandleClick.bind(this);
    this.searchHandleClick = this.searchHandleClick.bind(this);
    this.showHandleClick = this.showHandleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
  }

  resetHandleClick() {
    this.setState({
      episode: '',
      episodeHidden: true,
      search: '',
      searchResultsHidden: true,
      shows: [],
    })
  }

  searchHandleClick() {
    if (this.state.search !== '') {
      const showSearchUrl = `https://api.tvmaze.com/search/shows?q=${this.state.search.toLowerCase()}`;

      fetch(showSearchUrl)
        .then(response => response.json())
        .then((data) => {
          this.setState({
            episode: '',
            episodeHidden: true,
            searchResultsHidden: false,
            shows: data.map(show => show.show),
          });
        });
    }
  }

  showHandleClick(e) {
    const allEpisodesUrl = `https://api.tvmaze.com/shows/${e.target.alt}/episodes`;

    fetch(allEpisodesUrl)
      .then(response => response.json())
      .then((data) => {
        const episodeCount = data.length;
        const episode = Math.floor(Math.random() * episodeCount);
        this.setState({
          episode: data[episode],
          episodeHidden: false,
          searchResultsHidden: true,
          selectedShow: e.target.title,
        });
      });
  }

  render() {
    return (
      <div>
        <input id="search-field" placeholder='Search show title' value={this.state.search} onChange={this.handleChange} />
        <br />
        <button onClick={this.searchHandleClick}>Submit</button>
        <button onClick={this.resetHandleClick}>Reset</button>
        <div id="show-results" hidden={this.state.searchResultsHidden}>
          {this.state.shows.map(show => (
            show.image === null ?
              <img id="show-img" title={show.name} key={show.id} onClick={this.showHandleClick} src="https://static.tvmaze.com/images/no-img/no-img-portrait-text.png" alt={show.id} /> :
              <img id="show-img" title={show.name} key={show.id} onClick={this.showHandleClick} src={show.image.original} alt={show.id} />
          ))}
        </div>
        {this.state.episode === '' ?
          <div hidden /> :
          <div id="episode" hidden={this.state.episodeHidden}>
            <p id="episode-number">
              <span>
                {this.state.selectedShow} &mdash; S{this.state.episode.season} E{this.state.episode.number}
              </span>
              <br />
              <span id="episode-name">
                {this.state.episode.name}
              </span>
              <br />
              <span id="episode-airdate">
                Aired: {this.state.episode.airdate}
              </span>
            </p>
            {this.state.episode.image === null ?
              <img id="episode-img" title={this.state.episode.name} src="https://static.tvmaze.com/images/no-img/no-img-landscape-text.png" alt={this.state.episode.id} /> :
              <img id="episode-img" title={this.state.episode.name} src={this.state.episode.image.original} alt={this.state.episode.id} />
            }
          </div>
        }
      </div>
    )
  }
};
