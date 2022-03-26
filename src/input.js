import React from 'react';

export class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResultsHidden: true,
      shows: [],
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.resetHandleClick = this.resetHandleClick.bind(this);
    this.searchHandleClick = this.searchHandleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  searchHandleClick() {
    const showSearchUrl = `https://api.tvmaze.com/search/shows?q=${this.state.text.toLowerCase()}`;

    fetch(showSearchUrl)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          searchResultsHidden: false,
          shows: data.map(show => show.show),
        });
        console.log(this.state.shows);
      });
  }

  resetHandleClick() {
    this.setState({
      searchResultsHidden: true,
      text: '',
    })
  }

  render() {
    return (
      <div>
        <input placeholder='Search show title' value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.searchHandleClick}>Submit</button>
        <button onClick={this.resetHandleClick}>Reset</button>
        <ShowResults results={this.state.shows} visibility={this.state.searchResultsHidden} />
      </div>
    )
  }
};

class ShowResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: this.props.results
    };
    this.showHandleClick = this.showHandleClick.bind(this);
  }

  showHandleClick() {
    const allEpisodesUrl = `https://api.tvmaze.com/shows/${this.props.results[0].id}/episodes`;

    fetch(allEpisodesUrl)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <div hidden={this.props.visibility}>
        {this.props.results.map(show => (
          show.image === null ? 
          <img key={show.id} onClick={this.showHandleClick} src="https://static.tvmaze.com/images/no-img/no-img-portrait-text.png" alt="" /> :
          <img key={show.id} onClick={this.showHandleClick} src={show.image.medium} alt="" />
        ))}
      </div>
    )
  }
};
