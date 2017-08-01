import 'normalize.css';

//2/ Creating a new component
class App {
  //3/ Initial state of the application
  state = {
    now: 0
  };

  //10/ Rendering of the component
  render () {
    const { now } = this.state;
    return `
      <div>
        <h1>Hello React!</h1>
        <input type="text" placeholder="some input" />
        <p>Now: ${now}</p>
      </div>
    `;
  }
}

//7/ We need to re-render every 500ms to get some output
const app = new App();
setInterval(() => {
  // We modify the state
  app.state.now = new Date().getTime();
  // And we call render() method
  document.body.innerHTML = app.render();
}, 500);



