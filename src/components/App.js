import React from "react";
import Container from "./Container";

function App() {
  return (
    <div>
      <Container
        direction="row"
        header="Example 1"
        textPosition="center"
        contentPosition="left"
      >
        <p>This is some example text.</p>
        <button>Click me!</button>
      </Container>

      <Container
        direction="column"
        header="Example 2"
        textPosition="left"
        contentPosition="right"
      >
        <img src="https://via.placeholder.com/150" alt="placeholder" />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Container>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


export default App;
