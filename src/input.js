import React from 'react';

export class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResultsHidden: true,
      showImages: [],
      showResponse: '',
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleClick(e) {
    const showSearchUrl = `https://api.tvmaze.com/search/shows?q=${this.state.text.toLowerCase()}`;

    fetch(showSearchUrl)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          searchResultsHidden: false,
          showResponse: data,
          showImages: data.map(show => show.show.image === null ? null : show.show.image.medium)
        });
        console.log(this.state.showResponse);
        console.log(this.state.showImages);
      });
  }

  render() {
    return (
      <div>
        <input placeholder='Search show title' value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Submit</button>
        <ShowResults visibility={this.state.searchResultsHidden} showImages={this.state.showImages} />
      </div>
    )
  }
};

class ShowResults extends React.Component {
  render() {
    return (
      <div hidden={this.props.visibility}>
        {this.props.showImages.map(showImgSrc => (
          showImgSrc === null ? 
          <img key="noImage" src="https://static.tvmaze.com/images/no-img/no-img-portrait-text.png" alt="" /> :
          <img key={showImgSrc} src={showImgSrc} alt="" />
        ))}
      </div>
    )
  }
};
