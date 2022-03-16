import React from 'react';

export class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleClick(e) {
    fetch(`https://api.tvmaze.com/search/shows?q=${this.state.text.toLowerCase()}`)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <input placeholder='Search show title' value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
};
