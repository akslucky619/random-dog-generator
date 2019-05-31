// Importing modules
import React, { Component } from "react";
import ReactDOM from "react-dom";

// App class component
/*
  componentDidMount
  componentWillMount
  componentDidUpdate
*/
class App extends Component {
  constructor() {
    super();
    this.state = {
      getImage: ""
    };
  }
  componentGenerate = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => this.setState({ getImage: data.message }))
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (
      <div>
        <h1>Dog generator</h1>
        <img alt="" src={this.state.getImage} />
        <button onClick={this.componentGenerate}>Generate Doggo</button>
      </div>
    );
  }
}

// rendering app
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// Exporting App
// export default App;
