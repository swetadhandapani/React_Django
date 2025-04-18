import axios from "axios";
import React from "react";

class App extends React.Component {
  state = { details: [] };

  componentDidMount() {
    let data;
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        data = response.data;
        console.log(data);
        this.setState({ details: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Data Generated From Django</h1>
        <ul>
          {this.state.details.map((output, id) => (
            <div key={id}>
              <div>
                <h2>{output.employee}</h2>
                <h3>{output.department}</h3>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
