import 'normalize.css';

// Import React and react-dom
import React from 'react';
import { render } from 'react-dom';

//2/ Component needs to extend React.Component
class App extends React.Component{
  //3/ Internal state of the component
  state = {
    now: 0
  };

  //8/ When component is displayed - start the timer.
  componentWillMount () {
    setInterval(() => {
      //3/ We only need to update the state - React will do everything else for us.
      this.setState({
        now: new Date().getTime()
      });
    }, 500);
  }

  //10/ Rendering of the component
  render () {
    const { now } = this.state;
    return (
      <div>
        <h1>Hello React!</h1>
        <input type="text" placeholder="some input" />
        <p>Now: {now}</p>
      </div>
    );
  }
}

// Just render the app
render(<App />, document.body);



