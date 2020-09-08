import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VedioList from './VedioList';
import VedioDetails from './VedioDetails';

class App extends React.Component {
  state = { vedios: [], SelectedVedio: null };

  componentDidMount(){
      this.onTermSubmit('music');
  }

  onTermSubmit = async (term) => {
    const response = await Youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({
         vedios: response.data.items,
         SelectedVedio: response.data.items[0]
         });
  };

  onVedioSelect = (vedio) => {
    this.setState({ SelectedVedio: vedio });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VedioDetails vedio={this.state.SelectedVedio} />
            </div>
            <div className="five wide column">
              <VedioList
                onVedioSelect={this.onVedioSelect}
                vedios={this.state.vedios}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
