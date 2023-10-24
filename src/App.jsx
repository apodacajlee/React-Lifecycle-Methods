import { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["ready", "set", "GO"],
      text: ""
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    let newList = [...this.state.list, this.state.text] //creates a new list using the text appended to the current list
    this.setState({ list: newList, text: ""}) //updates list to the new list, clears text
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.text}
            onChange={(event) =>
              this.setState({text: event.target.value})
            }
          />
          <button type = "submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((item, idx) => {
            return <li key={idx}>{item}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
